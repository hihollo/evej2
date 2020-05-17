<template>
  <div class="main" :key="FunnelLegend">
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
            <td><span class="nature">标签大小</span></td>
            <td>
              <el-input-number v-model="labSize" @change="setLabSize" :min="5" :max="50"  size="small" >
              </el-input-number>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">引导线长</span></td>
            <td>
              <el-input-number v-model="lineLength" @change="setLineLength" :min="5" :max="80" size="small" >
              </el-input-number>
            </td>
          </tr>
          <br/>

          <tr>
            <td><span class="nature">层间距</span></td>
            <td>
              <el-input-number v-model="distance" @change="setDistance" :min="0" :max="50" size="small" >
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
      distance: 0,
      labSize: '10', // 刻度标签大小
      lineLength: 5
    }
  },
  methods: {
    setDistance (val) {
      this.$store.state.funnelLegend.borderWidth = val
      console.log('设置层间距离是')
      console.log(this.$store.state.funnelLegend.borderWidth)
    },
    setLabSize (val) {
      this.$store.state.funnelLegend.labSize = val
    },
    setLineLength (val) {
      this.$store.state.funnelLegend.length = val
    }

  },

  watch: {
    backgroundColor (val) {
      this.$store.state.funnelLegend.backgroundColor = val
      console.log('设置背景颜色为')
      console.log(this.$store.state.funnelLegend.backgroundColor)
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
