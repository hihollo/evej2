<template>
  <div >
    <el-row>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(1)">标题</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(2)">图例</el-button>
      <el-button size="medium" class="sty" type="info" @click="chooseOption(3)">网格</el-button>
    </el-row>

    <titlebar v-show="titleBarShow"></titlebar>
    <legendbar v-show="legendBarShow"></legendbar>
    <griddingbar v-show="griddingbarShow"></griddingbar>

  </div>
</template>

<script>
import TitleBar from '../../components/rightbar/navigator/TitleBar'
import LegendBar from './navigator/LegendBar'
import GriddingBar from '../../components/rightbar/navigator/GriddingBar'
export default {

  name: 'Navigator',
  components: {
    titlebar: TitleBar,
    legendbar: LegendBar,
    griddingbar: GriddingBar
  },
  data () {
    return {
      titleBarShow: true,
      legendBarShow: false,
      griddingbarShow: false
    }
  },
  methods: {
    chooseOption (val) {
      if (val === 1) {
        this.legendBarShow = false
        this.griddingbarShow = false
        this.titleBarShow = true
      } else if (val === 2) {
        this.griddingbarShow = false
        this.titleBarShow = false
        this.legendBarShow = true
      } else if (val === 3) {
        this.titleBarShow = false
        this.legendBarShow = false
        this.griddingbarShow = true
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
