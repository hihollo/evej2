<template>
  <div>
    <el-container>
      <el-main >
        <dragShowLine></dragShowLine>
      </el-main>

      <el-aside width="270px" style="background-color: #d2dde6;">
        <linenavigator></linenavigator>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import LineNavigator from '../../components/rightbar/navigator/line/LineNavigator'
import DragShowLine from '../../components/DragAndShowChart/DragShowLine'
export default {
  components: {
    linenavigator: LineNavigator,
    dragShowLine: DragShowLine
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
