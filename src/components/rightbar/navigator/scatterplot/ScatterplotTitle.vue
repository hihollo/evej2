<template>
  <div class="main" :key="PieTitleBar">
    <el-tabs>
      <div class="chartsStyle">
        <div class="chart-title">
          <tr style="height: 30px; ">
            <td><span class="nature">标题名称</span></td>
            <td> <el-input v-model="inputTitle" @change="changeTitle"
                           size="mini" style="margin-left: 2px; "></el-input></td>
          </tr>
          <br/>

          <tr style="height: 30px; ">
            <td><span class="nature">标题大小</span></td>
            <td>
              <el-input-number v-model="wordSize" @change="setWordSize" :min="10" :max="100" size="small" label="描述文字">
              </el-input-number>
            </td>
          </tr>
          <br/>

          <tr style="height: 30px; ">
            <td><span class="nature">横向位置</span></td>
            <td>
              <el-dropdown  @command="siteAcross" >
                <el-button type="primary" size="mini">
                  左右调整<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                  <el-dropdown-item command="left">居左</el-dropdown-item>
                  <el-dropdown-item command="center">居中</el-dropdown-item>
                  <el-dropdown-item command="right">居右</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </td>
          </tr>
          <br/>

          <tr style="height: 30px; ">
            <td><span class="nature">纵向位置</span></td>
            <td>
              <el-dropdown   @command="siteVertical" size="mini">
                <el-button type="primary" size="mini">
                  上下调整<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="top">居上</el-dropdown-item>
                  <el-dropdown-item command="center">居中</el-dropdown-item>
                  <el-dropdown-item command="bottom">居下</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </td>
          </tr>
          <br/>

          <tr style="height: 30px; ">
            <td><span class="nature">字体样式</span></td>
            <td>
              <el-dropdown  @command="wordFamily" >
                <el-button type="primary" size="small">
                  选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" >
                  <el-dropdown-item command="serif">宋体</el-dropdown-item>
                  <el-dropdown-item command="Sans-serif">微软雅黑</el-dropdown-item>
                  <el-dropdown-item command="Monospace">华文细黑</el-dropdown-item>
                  <el-dropdown-item command="Fantasy">英文字体</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </td>
          </tr>
          <br/>

          <tr style="height: 30px; ">
            <td><span class="nature">标题颜色</span></td>
            <td><el-color-picker v-model="titleColor" ></el-color-picker></td>
          </tr>

        </div>
      </div>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'setStyle',
  data () {
    return {
      id: '',
      inputTitle: '标题',
      wordSize: 20, // 字体大小
      titleColor: '' // 标题颜色
    }
  },
  methods: {
    changeTitle (val) {
      this.$store.state.chartTitle.text = val
      // this.$store.state.chartTitle.id = this.GenNonDuplicateID()
      console.log('this.$store.state.chartTitle.test')
      console.log(this.$store.state.chartTitle.test)
    },
    siteAcross (val) { // 处理标题横向位置
      console.log('设置标题横向位置' + val)
      this.$store.state.chartTitle.titleAcross = val
      // this.$store.state.chartTitle.id = this.GenNonDuplicateID()
    },
    siteVertical (val) { // 处理标题纵向位置
      console.log('设置标题纵向位置' + val)
      this.$store.state.chartTitle.titleVertical = val
      // this.$store.state.chartTitle.id = this.GenNonDuplicateID()
    },
    wordFamily (val) { // 标题字体类型
      this.$store.state.chartTitle.wordFamily = val
      // this.$store.state.chartTitle.id = this.GenNonDuplicateID()
      console.log('字体类型：' + val)
    },
    setWordSize (val) { // 处理标题大小
      this.$store.state.chartTitle.wordSize = this.wordSize
      // this.$store.state.chartTitle.id = this.GenNonDuplicateID()
      console.log('字体大小设置为：' + val)
    },
    GenNonDuplicateID () { // 产生一个随机的不重复的id
      return Math.random().toString(36).substr(3)
    }
  },

  watch: {
    titleColor (val) {
      this.$store.state.chartTitle.titleColor = val
      // this.$store.state.chartTitle.id = this.GenNonDuplicateID()
      console.log(this.$store.state.chartTitle.titleColor)
    }

  },
  beforeMount () {
    this.id = Math.random().toString(36).substr(3)
  }
}
</script>

<style lang="scss" scoped>
  .main{
    background-color: #d2dde6;
  }
  .nature{
    font-size: 17px;
    font-weight:bold;

  }

</style>
