<template>
  <div class="home">

    <el-container>
      <el-header >
        <h3 style="margin-top: 3px">大数据可视化分析工具</h3>
      </el-header>

     <el-container>
        <el-aside   width="200px" >
          <optionbox></optionbox>
        </el-aside>

       <el-main>
         <router-view></router-view>
       </el-main>

      </el-container>

     </el-container>

  </div>
</template>

<script>
import OptionBox from '../components/leftbar/OptionBox'
export default {
  name: 'Home',
  components: {
    optionbox: OptionBox
  }
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #3f3ce6;
    color: #333;
    //text-align: center;
    //line-height: 200px;
    height: 650px;

    background-color: #001b36;
    overflow-x:hidden;
  }

  .el-main {
    background-color: #34f37c;
    color: #333;
    height: 650px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
