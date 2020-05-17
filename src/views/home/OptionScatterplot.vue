<template>
  <div>

    <el-container>
      <el-main >
        <DragShowScatterplot></DragShowScatterplot>
      </el-main>

      <el-aside width="270px" style="background-color: #d2dde6;">
        <ScatterplotNavigator></ScatterplotNavigator>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import ScatterplotNavigator from '../../components/rightbar/navigator/scatterplot/ScatterplotNavigator'
import DragShowScatterplot from '../../components/DragAndShowChart/DragShowScatterplot'
export default {
  components: {
    DragShowScatterplot,
    ScatterplotNavigator
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
