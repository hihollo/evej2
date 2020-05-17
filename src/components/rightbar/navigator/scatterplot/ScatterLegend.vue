<template>
  <div class="main" :key="ScatterLegend">
    <el-tabs>
      <div class="chartsStyle">
        <div class="chart-title">

          <tr style="height: 30px;">
            <td><span class="nature">点颜色</span></td>
            <td>
              <el-color-picker v-model="pointColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">点形状</span></td>
            <td>
              <el-dropdown @command="handleCommand">
                <el-button type="primary">
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">圆形</el-dropdown-item>
                  <el-dropdown-item command="b">正方形</el-dropdown-item>
                  <el-dropdown-item command="c">三角形</el-dropdown-item>
                  <el-dropdown-item command="d">菱形</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">点大小</span></td>
            <td>
              <el-input-number v-model="pointSize" @change="setPointSize" :min="1" :max="30"  size="small" >
              </el-input-number>
            </td>
          </tr>
          <br/>

          <tr style="height: 30px;">
            <td><span class="nature">背景颜色</span></td>
            <td>
              <el-color-picker v-model="backgroundColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">刻度标签颜色</span></td>
            <td>
              <el-color-picker v-model="labColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">刻度表前大小</span></td>
            <td>
              <el-input-number v-model="labSize" @change="setLabSize" :min="10" :max="20"  size="small" >
              </el-input-number>
            </td>
          </tr>
        </div>
      </div>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data () {
    return {
      backgroundColor: '',
      pointColor: '',
      pointSize: 10,
      pointType: 'circle',
      labColor: '', // 刻度标签颜色
      labSize: '10' // 刻度标签大小
    }
  },
  methods: {
    setPointSize (val) {
      this.$store.state.scatterLegend.symbolSize = val
      console.log('点的大小设置为')
      console.log(this.$store.state.scatterLegend.symbolSize)
    },
    setLabSize (val) {
      this.$store.state.scatterLegend.labSize = val
    },
    handleCommand (val) {
      console.log('形状' + val)
      if (val === 'a') {
        this.pointType = 'circle'
        console.log('this.pointType = circle为')
        console.log(this.pointType)
      } else if (val === 'b') {
        this.pointType = 'rect'
        console.log('this.pointType = circle为')
        console.log(this.pointType)
      } else if (val === 'c') {
        this.pointType = 'triangle'
      } else if (val === 'd') {
        this.pointType = 'diamond'
      }
    }
  },

  watch: {
    pointType (val) {
      this.$store.state.scatterLegend.symbol = this.pointType
      console.log('设置点类型为')
      console.log(this.pointType)
      console.log(this.$store.state.scatterLegend.symbol)
    },
    backgroundColor (val) {
      console.log('背景颜色设置为')
      console.log(this.$store.state.scatterLegend.backgroundColor)
      this.$store.state.scatterLegend.backgroundColor = val
    },
    pointColor (val) {
      this.$store.state.scatterLegend.color = val
    },
    pointSize (val) {
      this.$store.state.scatterLegend.pointSize = val
    },
    labColor (val) {
      this.$store.state.scatterLegend.labColor = val
    },
    labSize (val) {
      this.$store.state.scatterLegend.labSize = val
    }

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
