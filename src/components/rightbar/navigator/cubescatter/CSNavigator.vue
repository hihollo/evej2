<template>
  <div :key="CSNavigator" style="background-color: #d2dde6;">
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <CSTitle v-show="title"></CSTitle>
    <CSLegend v-show="legend"></CSLegend>
    <CSGrridding v-show="gridding"></CSGrridding>

  </div>
</template>

<script>
import CSTitle from '../../../../components/rightbar/navigator/cubescatter/CSTitle'
import CSLegend from '../../../../components/rightbar/navigator/cubescatter/CSLegend'
import CSGrridding from '../../../../components/rightbar/navigator/cubescatter/CSGrridding'
export default {
  components: {
    CSTitle,
    CSLegend,
    CSGrridding
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
        this.title = false
        this.gridding = false
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
