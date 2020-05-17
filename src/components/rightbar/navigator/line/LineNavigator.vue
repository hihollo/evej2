<template>
  <div :key="LineNavigator" style="background-color: #d2dde6;">
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <LineTitleBar v-show="title"></LineTitleBar>

    <LineLegend v-show="legend"></LineLegend>
    <LineGriddingBar v-show="gridding"></LineGriddingBar>

  </div>
</template>

<script>
import LineTitleBar from '../../../../components/rightbar/navigator/line/LineTitleBar'
import LineLegend from '../../../../components/rightbar/navigator/line/LineLegend'
import LineGriddingBar from '../../../../components/rightbar/navigator/line/LineGriddingBar'
export default {
  components: {
    LineTitleBar,
    LineLegend,
    LineGriddingBar
  },
  data () {
    return {
      title: true,
      legend: false,
      gridding: false
    }
  },
  methods: {
    beforeMount () {
      this.id = Math.random().toString(36).substr(3)
    },
    chooseOption (val) {
      if (val === 1) {
        this.legend = false
        this.gridding = false
        this.title = true
      } else if (val === 2) {
        this.gridding = false
        this.title = false
        this.legend = true
      } else if (val === 3) {
        this.title = false
        this.legend = false
        this.gridding = true
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .sty{
    margin-left: 17px;
    float: left;
  }
</style>
