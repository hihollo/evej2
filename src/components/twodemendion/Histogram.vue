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
      histogramLegend: {
        backgroundColor: '#d2dde6',
        radius: 0,
        postColosr: '#3ea915',
        labColor: '#000000',
        labSize: 10
      },
      xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      yData: [5, 2, 3, 0, 10, 20]
    }
  },
  mounted () {
    this.getData()
    this.initEcharts()
  },
  methods: {

    getData () {
      console.log('========================================进入histogram')
      this.xData = this.$store.state.singleFile.info.xValue
      this.yData = this.$store.state.singleFile.info.yValue
      console.log('histogram接收到的xData数组')
      console.log(this.xData)
      console.log('histogram接收到的yData数组')
      console.log(this.yData)
    },
    initEcharts () {
      // const THIS = this
      const mainDiv = this.$refs.main // 找到绘制的区域,强烈推荐使用refs
      const myChart = echarts.init(mainDiv) // 初始化
      myChart.setOption({ // 官网例子
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
        backgroundColor: this.histogramLegend.backgroundColor,
        tooltip: {},
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
        },
        xAxis: {
          data: this.xData,
          axisLabel: {
            color: this.histogramLegend.labColor, // 刻度标签
            fontSize: this.histogramLegend.labSize
          }
        },
        yAxis: {
          axisLabel: {
            color: this.histogramLegend.labColor, // 刻度标签
            fontSize: this.histogramLegend.labSize
          }
        },
        series: [{
          name: '待写',
          type: 'bar',
          data: this.yData,
          itemStyle: {
            barBorderRadius: this.histogramLegend.radius,
            color: this.histogramLegend.postColosr
          }
        }]
      })
    }
  },
  watch: {
    '$store.state.singleFile.date': function (val) {
      console.log('进入histogram===============================')
      this.xData = this.$store.state.singleFile.info.xValue
      this.yData = this.$store.state.singleFile.info.yValue
      this.initEcharts()
    },
    '$store.state.chartTitle.text': function (val) {
      this.title.text1 = val
      console.log('histogram接收到的title' + this.title.text)
      this.initEcharts()
    },
    '$store.state.chartTitle.titleAcross': function (val) {
      this.title.x = val
      this.initEcharts()
    },
    '$store.state.chartTitle.titleVertical': function (val) {
      this.title.y = val
      this.initEcharts()
    },
    '$store.state.chartTitle.wordFamily': function (val) {
      this.title.fontFamily = val
      this.initEcharts()
    },
    '$store.state.chartTitle.wordSize': function (val) {
      this.title.fontSize = val
      this.initEcharts()
    },
    '$store.state.chartTitle.titleColor': function (val) {
      this.title.color = val
      this.initEcharts()
    },
    '$store.state.histogramLegend.backgroundColor': function (val) {
      this.histogramLegend.backgroundColor = val
      this.initEcharts()
    },
    '$store.state.histogramLegend.postColor': function (val) {
      this.histogramLegend.postColosr = val
      this.initEcharts()
    },

    '$store.state.histogramLegend.postRadius': function (val) {
      this.histogramLegend.radius = val
      this.initEcharts()
    },
    '$store.state.histogramLegend.labColor': function (val) {
      this.histogramLegend.labColor = val
      this.initEcharts()
    },
    '$store.state.histogramLegend.labSize': function (val) {
      this.histogramLegend.labSize = val
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
