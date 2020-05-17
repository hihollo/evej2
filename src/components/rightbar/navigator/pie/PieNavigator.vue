<template>
  <div :key="PieNavigator" style="background-color: #d2dde6;">
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <PieTitleBar v-show="title"></PieTitleBar>
    <PieLegend v-show="legend"></PieLegend>
    <PieGiddingBar v-show="gridding"></PieGiddingBar>

  </div>
</template>

<script>
import PieTitleBar from '../../../../components/rightbar/navigator/pie/PieTitleBar'
import PieLegend from '../../../../components/rightbar/navigator/pie/PieLegend'
import PieGiddingBar from '../../../../components/rightbar/navigator/pie/PieGriddingBar'
export default {
  components: {
    PieTitleBar,
    PieLegend,
    PieGiddingBar
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
