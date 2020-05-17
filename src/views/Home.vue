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
  },
  watch: {
    '$store.state.chartType': function (val) {
      if (val === 'showhome') {
        console.log('进入' + val)
        this.$router.push('/showhome')
      } else if (val === 'datamart') {
        this.$router.push('/datamart')
      } else if (val === 'histogram') {
        this.$router.push('/optionhistogram')
      } else if (val === 'line') {
        this.$router.push('/optionline')
      } else if (val === 'pie') {
        this.$router.push('/optionpie')
      } else if (val === 'scatterplot') {
        this.$router.push('/optionscatterplot')
      } else if (val === 'funnel') {
        this.$router.push('/optionfunnel')
      } else if (val === 'cubescatter') {
        this.$router.push('/optioncubescatter')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #5f6bd1;
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
    background-color: #e6e3e3;
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
