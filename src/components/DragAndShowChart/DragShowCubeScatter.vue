<template>
  <div :key="DragShowCS">

    <div>
      <div class="dragValue">
        <h4>数据集</h4>

        <el-select v-model="fileInfo.fileName" placeholder="请选择" @change="chooseFile" >
          <el-option v-for="(item,index) in fileInfo" :key="index" :label="item.fileName" :value="item.fileName"></el-option>
        </el-select>

        <br>
        <div>
            <el-button class="commintB" type="info" @click="showChart">图形显示</el-button>
        </div>

      </div>

      <div class="getDragAndShow">
          <router-view></router-view>  <!--图形显示-->
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      fileInfo: [],
      singleFile: null
    }
  },
  methods: {
    chooseFile (val) {
      console.log('选择的文件是 ')
      console.log(val)

      for (var i = 0; i < this.fileInfo.length; i++) {
        if (this.fileInfo[i].fileName === val) {
          this.singleFile = this.fileInfo[i].content
        }
      }
    },
    GenNonDuplicateID () { // 产生一个随机的不重复的id
      return Math.random().toString(36).substr(3)
    },
    showChart () {
      this.$store.state.singleFile.date = this.GenNonDuplicateID()
      this.$store.state.singleFile.info = this.singleFile
      console.log('往立体柱状图传递的数据')
      console.log(this.$store.state.singleFile.info)
      this.$router.push('/optioncubescatter/cubescatter')
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
    float: left;
    border-right:1px solid #000;
  }
  .getDragAndShow{
    width: 745px;
    height: 650px;
    background-color: #e6e3e3;
    float: left;
    margin-top: 20px;
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
  .commintB{
    margin-top: 20px;
  }
</style>
