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
                <el-menu-item index="3-1" @click="choosePage(3)">图表分析</el-menu-item>
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
        this.$router.push('/showhome')
      } else if (val === 2) {
        this.$router.push('/datamart')
      } else if (val === 3) {
        this.$router.push('/showchart')
      }
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
