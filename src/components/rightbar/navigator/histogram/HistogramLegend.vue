<template>
  <div class="main" :key="HistogramLegend">
    <el-tabs>
      <div class="chartsStyle">
        <div class="chart-title">
          <tr style="height: 30px; ">
            <td><span class="nature">柱子圆角</span></td>
            <td>
              <el-input-number v-model="radius" @change="setRadius" :min="0" :max="100"  size="small" :step="10">
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

          <tr style="height: 30px;">
            <td><span class="nature">柱子颜色</span></td>
            <td>
              <el-color-picker v-model="itemColor" show-alpha size="mini"></el-color-picker>
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
      radius: 0,
      backgroundColor: '',
      itemColor: '',
      labColor: '', // 刻度标签颜色
      labSize: '10' // 刻度标签大小
    }
  },
  methods: {
    setRadius (value) {
      this.$store.state.histogramLegend.postRadius = value
      console.log('柱状图圆角大小设置为：' + value)
    },
    setLabSize (val) {
      this.$store.state.histogramLegend.labSize = val
    }
  },
  watch: {
    backgroundColor (val) {
      this.$store.state.histogramLegend.backgroundColor = val
    },
    itemColor (val) {
      this.$store.state.histogramLegend.postColor = val
    },
    labColor (val) {
      this.$store.state.histogramLegend.labColor = val
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
