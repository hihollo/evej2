<template>
  <div>
    <el-container>
      <el-main >
        <dragshowpie></dragshowpie>
      </el-main>

      <el-aside width="270px" style="background-color: #d2dde6;">
        <pienavigator></pienavigator>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import PieNavigator from '../../components/rightbar/navigator/pie/PieNavigator'
import DragShowPie from '../../components/DragAndShowChart/DragShowPie'
export default {
  components: {
    pienavigator: PieNavigator,
    dragshowpie: DragShowPie
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
