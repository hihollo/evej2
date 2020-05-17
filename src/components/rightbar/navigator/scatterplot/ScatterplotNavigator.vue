<template>
  <div :key="LineNavigator" style="background-color: #d2dde6;">
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <ScatterplotTitle v-show="title"></ScatterplotTitle>
    <ScatterLegend v-show="legend"></ScatterLegend>
    <ScatterplotGridding v-show="gridding"></ScatterplotGridding>

  </div>
</template>

<script>
import ScatterLegend from '../../../../components/rightbar/navigator/scatterplot/ScatterLegend'
import ScatterplotGridding from '../../../../components/rightbar/navigator/scatterplot/ScatterplotGridding'
import ScatterplotTitle from '../../../../components/rightbar/navigator/scatterplot/ScatterplotTitle'
export default {
  components: {
    ScatterLegend,
    ScatterplotGridding,
    ScatterplotTitle
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
