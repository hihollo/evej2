<template>
  <div :key="DragShowFunnel">
    <div>
      <div class="dragValue">
        <h4>数据集</h4>

        <el-select v-model="fileInfo.fileName" placeholder="请选择" @change="chooseFile" >
          <el-option v-for="(item,index) in fileInfo" :key="index" :label="item.fileName" :value="item.fileName"></el-option>
        </el-select>

        <h4>维度</h4>
        <ul class="clist">
          <draggable
            class="dragArea list-group"
            :list="list11"
            :group="{ name: 'xAxis', pull: 'clone', put: false }"
          >
            <li v-for="(item,index) in list11" :key="index"  class="list-group-item">
              {{item}}
            </li>
          </draggable>
        </ul>

      </div>
      <div class="getDragAndShow">
        <div style="height: 100px">

          <table> <!-- 拖拽存放处 -->
            <tr>
              <td style="width: 100px">键</td>
              <td>
                <draggable
                  class="dragArea list-group"
                  :list="list2"
                  group="xAxis"
                >
                  <el-tag
                    closable  @close="handleClose1"
                    ref="xValue"
                    v-for="element in list2"
                    :key="element">
                    {{element}}
                  </el-tag>
                </draggable>
              </td>
            </tr>
            <tr style="margin-top: 10px">
              <td style="width: 100px">值(数字)</td>
              <td>
                <draggable
                  class="dragArea list-group"
                  :list="list3"
                  group="xAxis"
                >
                  <el-tag
                    closable @close="handleClose2"
                    ref="yValue"
                    v-for="element in list3"
                    :key="element">
                    {{element}}
                  </el-tag>
                </draggable>
              </td>
            </tr>

            <tr>
              <td></td>
              <td><button @click="showChart">图形显示</button></td>
            </tr>
          </table>
        </div>
        <div style="height: 520px">
          <router-view></router-view>  <!--图形显示-->
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      id: '',
      update: '',
      list11: [], // 存放type集合（x轴数据）
      list12: [], // 存放值集合（y轴数据）
      list2: [], // 存放拖拽的x轴值到table
      list3: [], // 存放拖拽的y轴值到table
      fileInfo: [],
      singleFile: null
      /* chartInfo: {
          value: null,
          name: null
        } */
    }
  },
  components: {
    draggable
  },
  methods: {
    chooseFile (val) {
      console.log('选择的文件是 ')
      console.log(val)
      var seriesT = []

      for (var i = 0; i < this.fileInfo.length; i++) {
        if (this.fileInfo[i].fileName === val) {
          seriesT[0] = this.fileInfo[i]
          this.singleFile = seriesT
        }
      }
      for (let j = 0; j < seriesT[0].type.length; j++) {
        this.list11[j] = seriesT[0].type[j]
      }
      this.update = this.GenNonDuplicateID()
    },

    GenNonDuplicateID () { // 产生一个随机的不重复的id
      return Math.random().toString(36).substr(3)
    },

    handleClose1 (id) { // 删除table中第一行拖拽的标签
      this.list2 = []
    },
    handleClose2 (id) { // 删除table中第一行拖拽的标签
      this.list3 = []
    },
    showChart () {
      console.log('单个文件对象信息')
      console.log(this.singleFile)
      var chartInfoT = {
        value: null,
        name: null
      }
      var xIndex
      var yIndex
      for (var i = 0; i < this.singleFile[0].type.length; i++) {
        if (this.singleFile[0].type[i] === this.list2[0]) {
          xIndex = i
        } else if (this.singleFile[0].type[i] === this.list3[0]) {
          yIndex = i
        } else {
          continue
        }
      }
      console.log(xIndex + '--' + yIndex)

      chartInfoT.name = this.singleFile[0].content[xIndex]
      chartInfoT.value = this.singleFile[0].content[yIndex]

      console.log('chartInfoT.name')
      console.log(chartInfoT.name)
      console.log('chartInfoT.value')
      console.log(chartInfoT.value)

      /*                  */
      this.$store.state.singleFile.info = this.dealPieData(chartInfoT)
      this.$store.state.singleFile.date = this.GenNonDuplicateID()
      this.$router.push('/optionfunnel/funnel')
    },
    dealPieData (chartInfoT) {
      var arr = []
      var pieInfo = [{ value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }, { value: '', name: '' }]
      for (let e = 0; e < chartInfoT.name.length; e++) {
        pieInfo[e].value = chartInfoT.value[e]
        pieInfo[e].name = chartInfoT.name[e]
        arr[e] = pieInfo[e]
      }
      return arr
    }

  },
  mounted () {
    if (this.$store.state.fileInfo.length !== 0) {
      this.fileInfo = this.$store.state.fileInfo
    }
  }

}
</script>
<style lang="scss" scoped>
  .dragValue{
    width: 190px;
    height: 650px;
    background-color:  #e6e3e3;
    border-right:1px solid #000;
    float: left;
  }
  .getDragAndShow{
    width: 745px;
    height: 650px;
    background-color:  #e6e3e3;
    float: left;
  }
  .list-group-item{
    margin-top: 20px;
    list-style-type:none;
  }
  li{
    width: 100px;
    line-height: 30px;
    border: 1px solid #dddddd;
  }
  .clist li{
    width: 100%;
    line-height: 30px;
    border: 1px solid #dddddd;
  }

  .clist li.selected{
    color: #000000;
  }
  table{
    border-collapse: collapse;
    height: 95px;
  }
  tr,td{
    width: 600px;
    height: 30px;
    border: 1px solid black;
    text-align: left;
  }
</style>
