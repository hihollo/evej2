<template>
  <div>

    <el-container>
      <el-main >
        <dragShowHistogram></dragShowHistogram>
      </el-main>

      <el-aside width="270px" style="background-color: #d2dde6;">
        <histogramnavigator></histogramnavigator>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import HistogramNavigator from '../../components/rightbar/navigator/histogram/HistogramNavigator'
import DragShowHistogram from '../../components/DragAndShowChart/DragShowHistogram'
export default {
  components: {
    histogramnavigator: HistogramNavigator,
    dragShowHistogram: DragShowHistogram
  }
}
</script>

<style lang="scss" scoped>

  .el-aside {
    background-color: #3f3ce6;
    color: #333;
    height: 650px;
  }

  .el-main {
    background-color: #e6e3e3;
    color: #333;
    width: 1050px;
    height: 650px;
  }
</style>
