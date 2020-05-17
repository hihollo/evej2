<template>
  <div>
    <el-container>
      <el-main >
        <DragShowFunnel></DragShowFunnel>
      </el-main>

      <el-aside width="270px" style="background-color: #d2dde6;">
        <FunnelNavigator></FunnelNavigator>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import FunnelNavigator from '../../components/rightbar/navigator/funnel/FunnelNavigator'
import DragShowFunnel from '../../components/DragAndShowChart/DragShowFunnel'
export default {
  components: {
    FunnelNavigator,
    DragShowFunnel
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
