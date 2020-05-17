<template>
  <div class="main" :key="PieLegend">
    <el-tabs>
      <div class="chartsStyle">
        <div class="chart-title">
          <tr style="height: 30px;">
            <td><span class="nature">背景颜色</span></td>
            <td>
              <el-color-picker v-model="backgroundColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">标签颜色</span></td>
            <td>
              <el-color-picker v-model="labColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">引导线颜色</span></td>
            <td>
              <el-color-picker v-model="lineColor" show-alpha size="mini"></el-color-picker>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">标签大小</span></td>
            <td>
              <el-input-number v-model="labSize" @change="setLabSize" :min="5" :max="50"  size="small" >
              </el-input-number>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">图形引导线长度</span></td>
            <td>
              <el-input-number v-model="length1" @change="setLength1" :min="5" :max="50"  size="small" >
              </el-input-number>
            </td>
          </tr>

          <tr>
            <td><span class="nature">标签引导线长度</span></td>
            <td>
              <el-input-number v-model="length2" @change="setLength2" :min="5" :max="50"  size="small" >
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
      lineColor: '', // 引导线颜色
      length1: 5, // 图形引导线长度
      length2: 10, // 标签引导线长度
      labColor: '', // 刻度标签颜色
      labSize: '10' // 刻度标签大小
    }
  },
  methods: {
    setLength1 (val) {
      this.$store.state.pieLegend.length1 = val
    },
    setLength2 (val) {
      this.$store.state.pieLegend.length2 = val
    },
    setLabSize (val) {
      this.$store.state.pieLegend.labSize = val
    }
  },

  watch: {
    backgroundColor (val) {
      this.$store.state.pieLegend.backgroundColor = val
    },
    lineColor (val) {
      this.$store.state.pieLegend.lineColor = val
    },
    labColor (val) {
      this.$store.state.pieLegend.labColor = val
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
