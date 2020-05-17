<template>
  <div>
    <el-container>
      <el-main >
        <DragShowCubeScatter></DragShowCubeScatter>
      </el-main>

      <el-aside width="270px" style="background-color: #d2dde6;">
        <CSNavigator></CSNavigator>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import CSNavigator from '../../components/rightbar/navigator/cubescatter/CSNavigator'
import DragShowCubeScatter from '../../components/DragAndShowChart/DragShowCubeScatter'
export default {
  components: {
    CSNavigator,
    DragShowCubeScatter
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
