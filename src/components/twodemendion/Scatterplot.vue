<template>
  <div class="line">
    <div class="main" ref="main">

    </div>
  </div>
</template>
<script>
const echarts = require('echarts/lib/echarts') // 引入echarts
require('echarts/lib/chart/bar') // 引入柱状图
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {

  data () {
    return {
      title: {
        text1: '图表名称',
        x: 'left',
        y: 'top',
        fontFamily: 'Courier New',
        fontSize: 20,
        color: '#000'
      },
      legend: {
        backgroundColor: '#d2dde6', // 背景色
        labColor: '#000000', // 刻度标签颜色
        labSize: 10, // 刻度标签大小
        symbolSize: 10, // 点的大小
        symbol: 'circle', // 每个点的形状
        color: '#000' /// 每个点的颜色
      },
      data: [[1, 30], [2, 24], [50, 40]]
    }
  },
  methods: {
    initEcharts () {
      // const THIS = this
      const mainDiv = this.$refs.main // 找到绘制的区域,强烈推荐使用refs
      const myChart = echarts.init(mainDiv) // 初始化
      myChart.setOption({ // 官网例子
        backgroundColor: this.legend.backgroundColor,
        title: {
          text: this.title.text1,
          x: this.title.x, // 标题横向位置//////////////////////////////////// 增
          y: this.title.y, // 标题纵向位置//////////////////////////////////// 增
          textStyle: {
            fontFamily: this.title.fontFamily,
            fontSize: this.title.fontSize,
            color: this.title.color
          }
        },
        xAxis: [{
          show: true,
          axisLabel: {
            color: this.legend.labColor, // 刻度标签
            fontSize: this.legend.labSize
          }
        }],
        yAxis: [{
          show: true,
          axisLabel: {
            color: this.legend.labColor, // 刻度标签
            fontSize: this.legend.labSize
          }
        }],
        series: [{
          symbolSize: this.legend.symbolSize, // 点的大小
          data: this.data,
          symbol: this.legend.symbol, // 每个点的形状
          color: this.legend.color, // 每个点的颜色
          type: 'scatter'
        }],
        // 右上角工具条
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            saveAsImage: {
              show: true
            }
          }
        }
      })
    }
  },
  mounted () {
    this.initEcharts()
  },

  watch: {
    '$store.state.singleFile.date': function (val) {
      this.data = this.$store.state.singleFile.info
      this.initEcharts()
      console.log('散点图画好后')
      console.log(this.data)
    },
    '$store.state.chartTitle.text': function (val) {
      this.title.text1 = this.$store.state.chartTitle.text
      console.log('histogram接收到的title' + this.title.text)
      this.initEcharts()
    },
    '$store.state.chartTitle.titleAcross': function (val) {
      this.title.x = this.$store.state.chartTitle.titleAcross
      this.initEcharts()
    },
    '$store.state.chartTitle.titleVertical': function (val) {
      this.title.y = this.$store.state.chartTitle.titleVertical
      this.initEcharts()
    },
    '$store.state.chartTitle.wordFamily': function (val) {
      this.title.fontFamily = this.$store.state.chartTitle.wordFamily
      this.initEcharts()
    },
    '$store.state.chartTitle.wordSize': function (val) {
      this.title.fontSize = this.$store.state.chartTitle.wordSize
      this.initEcharts()
    },
    '$store.state.chartTitle.titleColor': function (val) {
      this.title.color = this.$store.state.chartTitle.titleColor
      this.initEcharts()
    },
    '$store.state.scatterLegend.backgroundColor': function (val) {
      console.log('散点图接收到的背景颜色')
      console.log(val)
      this.legend.backgroundColor = val
      this.initEcharts()
    },
    '$store.state.scatterLegend.labColor': function (val) {
      this.legend.labColor = val
      this.initEcharts()
    },
    '$store.state.scatterLegend.labSize': function (val) {
      this.legend.labSize = val
      this.initEcharts()
    },
    '$store.state.scatterLegend.symbolSize': function (val) {
      this.legend.symbolSize = val
      this.initEcharts()
    },
    '$store.state.scatterLegend.symbol': function (val) {
      this.legend.symbol = val
      console.log('接收到的点类型为')
      console.log(this.legend.symbol)
      this.initEcharts()
    },
    '$store.state.scatterLegend.color': function (val) {
      this.legend.color = val
      this.initEcharts()
    }
  },
  destroyed () {
    this.$store.state.singleFile.info = null
  }
}

</script>
<style lang="scss" scoped>
  .line{
    .main {
      width: 735px;
      height:500px;
    }
  }
</style>
