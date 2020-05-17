<template>
  <div :key="HistogramNavigator" style="background-color: #d2dde6;">
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <HistogramTitleBar v-show="title"></HistogramTitleBar>
    <HistogramLegend v-show="histogramLegend"></HistogramLegend>
    <HistogramGriddingBar v-show="gridding"></HistogramGriddingBar>

  </div>
</template>

<script>
import HistogramTitleBar from '../../../../components/rightbar/navigator/histogram/HistogramTitleBar'
import HistogramLegend from '../../../../components/rightbar/navigator/histogram/HistogramLegend'
import HistogramGriddingBar from '../../../../components/rightbar/navigator/histogram/HistogramGriddingBar'
export default {
  components: {
    HistogramTitleBar,
    HistogramLegend,
    HistogramGriddingBar
  },
  data () {
    return {
      title: true,
      histogramLegend: false,
      gridding: false
    }
  },
  methods: {
    beforeMount () {
      this.id = Math.random().toString(36).substr(3)
    },
    chooseOption (val) {
      if (val === 1) {
        this.histogramLegend = false
        this.gridding = false
        this.title = true
      } else if (val === 2) {
        this.gridding = false
        this.title = false
        this.histogramLegend = true
      } else if (val === 3) {
        this.title = false
        this.histogramLegend = false
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
