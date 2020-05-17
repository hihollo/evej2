<template>
  <div class="main" :key="LineLegend">
    <el-tabs>
      <div class="chartsStyle">
        <div class="chart-title">

          <tr style="height: 30px;">
            <td><span class="nature">折线颜色</span></td>
            <td>
              <el-color-picker v-model="lineColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr style="height: 30px;">
            <td><span class="nature">拐点颜色</span></td>
            <td>
              <el-color-picker v-model="borderColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">拐点大小</span></td>
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
            <td><span class="nature">刻度标签大小</span></td>
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
      lineColor: '',
      pointSize: '1',
      borderColor: '',
      labColor: '', // 刻度标签颜色
      labSize: '10' // 刻度标签大小
    }
  },
  methods: {
    setPointSize (val) {
      console.log('设置拐点大小')
      console.log(val)
      this.$store.state.lineLegend.pointSize = val
      console.log('设置拐点大小后')
      console.log(this.$store.state.lineLegend.pointSize)
    },
    setLabSize (val) {
      this.$store.state.lineLegend.labSize = val
    }
  },
  watch: {
    backgroundColor (val) {
      this.$store.state.lineLegend.backgroundColor = val
    },

    lineColor (val) {
      this.$store.state.lineLegend.lineColor = val
      console.log('设置折现颜色')
      console.log(this.$store.state.lineLegend.lineColor)
    },
    labColor (val) {
      this.$store.state.lineLegend.labColor = val
    },
    borderColor (val) {
      this.$store.state.lineLegend.borderColor = val
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
