<template>
    <div >
      <div class="uploadFile">
        <div  class="but1">
          <input type="file" ref="upFile" style="font-size: 20px" @change="importF()" />
        </div>
        <div clsaa="but2">
          <button @click=" showTable()" style="height: 34px"  >添加到列表</button>
        </div>

      </div>

      <div>
        <template>
          <el-table
            :data="fileInfo"
            :key="update"
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.sdate }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="名称"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>名称: {{ scope.row.fileName }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.fileName }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>

      <div>
       <!-- <button @click="getInfo">获取store</button>-->
        <!--<button @click="showTable">插入表中</button>-->
      </div>

    </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  name: 'DataMart',
  data () {
    return {
      update: '', //  table刷新要的key
      fileInfo: [], // 将上传的所有excel文件都存在这个数组中（存了一个或多个singleFile对象）
      txtList: [], // 将所有的txt文件存在这个数组
      fileName: '', // imporF中的文件名传到deal使用
      fileNum: 0,
      wb: '', // 读取完成的数据
      content: '', // 文件内容
      // name: '', // 文件名
      rABS: true // 是否将文件读取为二进制字符串
    }
  },

  methods: {

    GenNonDuplicateID () { // 产生一个随机的不重复的id
      return Math.random().toString(36).substr(3)
    },
    getEnd (name) { // 获取文件结尾名
      let index
      for (let i = 0; i < name.length; i++) {
        if (name[i] === '.') {
          index = i
        }
      }
      const endWith = name.substring(index)
      return endWith
    },
    showTable () { // 将store中fileInfo的数据赋值给this.fileInfo,table里才显示文件
      this.fileInfo = this.$store.state.fileInfo
      this.update = this.GenNonDuplicateID()
      console.log('显示时获得的所有文件')
      console.log(this.fileInfo)
      // console.log('showTable得到的数据')
      // console.log(this.fileInfo)
    },
    handleEdit (index, row) {
      console.log('查看按钮')
      console.log(index, row)
      alert(row.type + ' ' + row.content)
    },
    handleDelete (index, row) {
      console.log('删除按钮')
      console.log(index, row)
      this.deleteSingle(row.sdate)
      this.update = this.GenNonDuplicateID()
    },
    deleteSingle (val) {
      var files = []
      var j = 0
      for (var i = 0; i < this.fileInfo.length; i++) {
        if (this.fileInfo[i].sdate !== val) {
          files[j] = this.fileInfo[i]
          j++
        }
      }
      this.fileInfo = files
      console.log('files =')
      console.log(files)
      this.$store.state.fileNum--
      this.$store.state.fileInfo = files
    },
    /// ///////////////////====================/////////////
    importF () { // 导入
      var singleFile = {
        sdate: 'date1', // 文件上传时间
        fileName: '' // 文件名称
      }
      const obj = this.$refs.upFile
      // console.log('点击')
      // console.log(obj)
      if (!obj.files) {
        console.log('不是file类型')
        return
      }
      const f = obj.files[0]

      // 文件名
      // console.log('文件名')
      // console.log(f.name) /// //////////
      if (this.getEnd(f.name) === '.xlsx') {
        singleFile.fileName = f.name /// /////////////////////===========================
        this.fileName = singleFile.fileName
        const reader = new FileReader()
        const _this = this
        reader.onload = function (e) {
          const data = e.target.result
          // console.log('读取到的内容: ')
          // console.log(data)
          if (_this.rABS) {
            this.wb = XLSX.read(btoa(_this.fixData(data)), { // 手动转化
              type: 'base64'
            })
          } else {
            this.wb = XLSX.read(data, {
              type: 'binary'
            })
          }
          var content = JSON.stringify(XLSX.utils.sheet_to_json(this.wb.Sheets[this.wb.SheetNames[1]])).toString()
          _this.receiveXLSX(content)
          let fields = { }
          let tableName = ' '
          let chineseTableName = ' '
          let tableNumber = ''
          // 根据项目需求得到自己想要的json
          const arr = XLSX.utils.sheet_to_json(this.wb.Sheets[this.wb.SheetNames[1]])
          arr.forEach((item, index) => {
            if (item['表序号']) {
              if (tableName && chineseTableName && Object.keys(fields).length && tableNumber) {
                obj[tableName] = {
                  tableName: chineseTableName,
                  fields
                }
              }
              fields = {}
              tableName = ''
              chineseTableName = ''
              tableName = item['表名及备注']
              tableNumber = '表' + item['表序号'] + ':'
            } else { // 同一个表
              if (item['表名及备注']) {
                chineseTableName = tableNumber + item['表名及备注']
              }
            }
            fields[item['字段名']] = item['字段注释']
            if (index === arr.length - 1) {
              obj[tableName] = {
                tableName: chineseTableName,
                fields
              }
            }
          })
        }
        if (this.rABS) {
          reader.readAsArrayBuffer(f)
        } else {
          reader.readAsBinaryString(f)
        }
        this.deal()
      } else if (this.getEnd(f.name) === '.txt') {
        console.log('上传的shitxt文件')
        this.fileName = f.name
        // 使用 FileReader 来读取文件
        const reader = new FileReader()
        // 读取纯文本文件,且编码格式为 utf-8
        reader.readAsText(f, 'UTF-8')
        // 读取文件,会触发 onload 异步事件,可使用回调函数 来获取最终的值.
        const this2 = this
        reader.onload = function (e) {
          const fileContent = e.target.result
          this2.receiveTxtData(fileContent)
        }
      }
    },
    receiveTxtData (val) {
      // console.log('接收到的txt内容')
      // console.log(val)
      console.log('receiveTxtData----------------')
      this.dealTxt(val)
    },
    receiveXLSX (val) {
      this.deal(val)
    },
    dealTxt (val) {
      const singleFile = {
        sdate: 0, // 文件上传时间
        fileName: '', // 文件名称
        type: '0', // 存放excel第一行的所用值
        content: [] // 存放excel每一列的值
      }
      this.fileNum = this.$store.state.fileInfo.length
      singleFile.sdate = this.getDate() // 设置上传时间
      singleFile.fileName = this.fileName
      singleFile.content[0] = val
      this.keepFile(singleFile)
    },
    fixData (data) { // 文件流转BinaryString
      var o = ''
      var l = 0
      var w = 10240
      for (; l < data.byteLength / w; ++l) { o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w))) }
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    },
    deal (content) {
      const singleFile = {
        sdate: 0, // 文件上传时间
        fileName: '', // 文件名称
        type: [], // 存放excel第一行的所用值
        content: [] // 存放excel每一列的值
      }
      // console.log('进入deal（）函数')
      if (content !== null) {
        console.log('this.$store.fileInfo.length')
        this.fileNum = this.$store.state.fileInfo.length
        console.log(this.fileNum)
        // this.fileNum++
        // console.log('fileNum = ' + this.fileNum)
        var obj2 = JSON.parse(content) // 将json串转为json对象
        // console.log('在deal中')
        // console.log(obj2)
        var keyNum = 0
        for (var key in obj2[0]) {
          if (key) {
            keyNum++
          }
        }
        /* 思路：第一行有几个数据，就建一个这么长的数组，每一个数组存储excel表中的一列数据 */
        const keyValue = [] // 存放excel第一行的数据
        var j = 0
        for (const key in obj2[0]) {
          // console.log('键：' + key); //json对象的key
          keyValue[j] = key
          // console.log(' keyValue ' + key + ': ' + keyValue[j])
          j++
        }
        var dataValue = []
        for (var k = 0; k < keyNum; k++) { // 一维长度为i,i为变量，可以根据实际情况改变
          dataValue[k] = [] // 声明二维，每一个一维数组里面的一个元素都是一个数组
        }

        // 将excel表中同一列数据保存到一个数组中（有几列就有几个数组，这里excel最多十列，多出的不会存入数组），这里是通过当键名相同时将值放到相同的数组
        for (let i = 0; i < obj2.length; i++) {
          for (const key in obj2[i]) {
            if (keyValue[0] === key) {
              dataValue[0][i] = obj2[i][key]
            } else if (key === keyValue[1]) {
              dataValue[1][i] = obj2[i][key]
            } else if (key === keyValue[2]) {
              dataValue[2][i] = obj2[i][key]
            } else if (key === keyValue[3]) {
              dataValue[3][i] = obj2[i][key]
            } else if (key === keyValue[4]) {
              dataValue[4][i] = obj2[i][key]
            } else if (key === keyValue[5]) {
              dataValue[5][i] = obj2[i][key]
            } else if (key === keyValue[6]) {
              dataValue[6][i] = obj2[i][key]
            } else if (key === keyValue[7]) {
              dataValue[7][i] = obj2[i][key]
            } else if (key === keyValue[8]) {
              dataValue[8][i] = obj2[i][key]
            } else if (key === keyValue[9]) {
              dataValue[9][i] = obj2[i][key]
            }
          }
        }
        singleFile.sdate = this.getDate() // 设置上传时间
        // console.log('===========================')
        for (let i = 0; i < keyValue.length; i++) { // 根据第一行有多少个值，将每一列存到一个数组中
          singleFile.type[i] = keyValue[i]
          singleFile.content[i] = dataValue[i]
        }

        // console.log('singleFile内容')
        // console.log(singleFile)
        // console.log('fileNum = ' + this.fileNum)

        singleFile.fileName = this.fileName
        this.keepFile(singleFile)
      }
    },

    keepFile (val) {
      this.$store.state.fileInfo[this.fileNum] = val
      console.log('所有文件')
      console.log(this.$store.state.fileInfo)
      this.$store.state.fileNum = this.fileNum++
    },

    getDate () {
      var myDate = new Date()
      var date
      // date = myDate.getFullYear() + myDate.getMonth() + myDate.getDate() + myDate.getHours + myDate.getMinutes() + myDate.getSeconds()
      date = myDate.getFullYear().toString() + '-' + myDate.getMonth().toString() + '-' + myDate.getDate().toString() + '-' + myDate.getHours() + '-' + myDate.getMinutes() + '-' + myDate.getSeconds()
      return date
    }
  },
  mounted () {
    this.fileInfo = this.$store.state.fileInfo
  }

}
</script>

<style lang="scss" scoped>
 .uploadFile{
   width: 1320px;
   height: 100px;
   background-color: #6da9a1;
 }
  .but1{
    margin-left: 10px;
    float: left;
  }
  .but2{
    margin-left: 150px;
    float: left;
  }
</style>
