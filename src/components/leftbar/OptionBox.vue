<template>
    <div>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#001b36"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>首页概览</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="choosePage(1)">查看模板</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据集</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="choosePage(2)">数据集选择</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="choosePage(3)">柱状图</el-menu-item>
                <el-menu-item index="3-2" @click="choosePage(4)">折线图</el-menu-item>
                <el-menu-item index="3-3" @click="choosePage(5)">饼状图</el-menu-item>
                <el-menu-item index="3-4" @click="choosePage(6)">散点图</el-menu-item>
                <el-menu-item index="3-5" @click="choosePage(7)">漏斗图</el-menu-item>
                <el-menu-item index="3-6" @click="choosePage(8)">立体散点图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'OptionBox',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    choosePage (val) {
      if (val === 1) {
        this.$store.state.chartType = 'showhome'
        // this.$router.push('/showhome')
      } else if (val === 2) {
        this.$store.state.chartType = 'datamart'
        // this.$router.push('/datamart')
      } else if (val === 3) {
        this.$store.state.chartType = 'histogram'
        // this.$router.push('/optionhistogram')
      } else if (val === 4) {
        this.$store.state.chartType = 'line'
        // this.$router.push('/optionline')
      } else if (val === 5) {
        this.$store.state.chartType = 'pie'
      } else if (val === 6) {
        this.$store.state.chartType = 'scatterplot'
      } else if (val === 7) {
        this.$store.state.chartType = 'funnel'
      } else if (val === 8) {
        this.$store.state.chartType = 'cubescatter'
      }
    },
    GenNonDuplicateID () { // 产生一个随机的不重复的id
      return Math.random().toString(36).substr(3)
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;

  }
</style>
