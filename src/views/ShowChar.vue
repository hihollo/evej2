<template>
  <div>

    <el-container>
      <el-main >
        <valuedrag></valuedrag>
      </el-main>

      <el-aside width="270px" style="background-color: #545c64">
        <navigator></navigator>
        rightBar
      </el-aside>
    </el-container>
  </div>
</template>
<script>
import Navigator from '../components/rightbar/Navigator'
import ValueDrag from '../components/showchart/ValueDrag'
export default {
  name: 'ShowChar',
  components: {
    navigator: Navigator,
    valuedrag: ValueDrag
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
    background-color: #59f819;
    color: #333;
    width: 1050px;
    height: 650px;
  }
</style>
