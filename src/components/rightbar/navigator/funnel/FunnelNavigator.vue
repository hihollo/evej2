<template>
  <div :key="FunnelNavigator" style="background-color: #d2dde6;">
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <FunnelTitle v-show="titleBarShow"></FunnelTitle>

    <FunnelLegend v-show="legendShow"></FunnelLegend>
    <FunnelGridding v-show="griddingBarShow"></FunnelGridding>

  </div>
</template>

<script>
import FunnelTitle from '../../../../components/rightbar/navigator/funnel/FunnelTitle'
import FunnelLegend from '../../../../components/rightbar/navigator/funnel/FunnelLegend'
import FunnelGridding from '../../../../components/rightbar/navigator/funnel/FunnelGridding'
export default {
  components: {
    FunnelTitle,
    FunnelLegend,
    FunnelGridding
  },
  data () {
    return {
      titleBarShow: true,
      legendShow: false,
      griddingBarShow: false
    }
  },
  methods: {
    beforeMount () {
      this.id = Math.random().toString(36).substr(3)
    },
    chooseOption (val) {
      if (val === 1) {
        this.legendShow = false
        this.griddingBarShow = false
        this.titleBarShow = true
      } else if (val === 2) {
        this.griddingBarShow = false
        this.titleBarShow = false
        this.legendShow = true
      } else if (val === 3) {
        this.titleBarShow = false
        this.legendShow = false
        this.griddingBarShow = true
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
