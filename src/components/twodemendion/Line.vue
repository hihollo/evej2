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
      lineLegend: {
        backgroundColor: '#d2dde6', // 背景色
        labColor: '#000000', // 刻度标签颜色
        labSize: 10, // 刻度标签大小
        lineColor: '#a91d28', // 折线颜色
        pointSize: 1, // 拐点大小
        borderColor: '#2d2fd2' // 拐点颜色
      },
      xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      yData: [5, 2, 3, 0, 10, 20]
    }
  },
  mounted () {
    this.initEcharts()
  },
  methods: {
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
        tooltip: { /* 鼠标跟随效果 */
          // trigger: 'axis'
        },
        backgroundColor: this.lineLegend.backgroundColor,
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
        xAxis: [{
          type: 'category',
          data: this.xData,
          show: true,
          splitLine: {
            show: true
          },
          axisLabel: {
            color: this.lineLegend.labColor, // 刻度标签
            fontSize: this.lineLegend.labSize
          }
        }],
        yAxis: [{
          type: 'value',
          // name: '总户数(户)',
          axisLabel: {
            color: this.lineLegend.labColor, // 刻度标签
            fontSize: this.lineLegend.labSize
          },
          splitLine: { /* 网格线的设置 */
            show: true
          },
          axisLine: { /* 坐标轴，轴线的设置 */
            lineStyle: {
              color: 'red'
            }
          },
          axisTick: { /* 坐标轴刻度的设置 */
            lineStyle: {
              color: 'blue'
            }
          }
        }
        ],
        series: [{
          // name: '最高气温',
          /* 数据的名称 */
          type: 'line',
          /* 这个数据的类型，画折线 */
          data: this.yData,
          yAxisIndex: 0,
          /* 与上面y轴的数组中，第一组数据对应 */
          itemStyle: {
            color: this.lineLegend.lineColor, // 折现颜色
            borderWidth: this.lineLegend.pointSize, // 拐点大小
            borderColor: this.lineLegend.borderColor // 拐点颜色
          }
        }]
      })
    }
  },

  watch: {
    '$store.state.singleFile.date': function (val) {
      console.log('进入line================')
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
    '$store.state.lineLegend.backgroundColor': function (val) {
      this.lineLegend.backgroundColor = val
      this.initEcharts()
    },
    '$store.state.lineLegend.labColor': function (val) {
      this.lineLegend.labColor = val
      this.initEcharts()
    },
    '$store.state.lineLegend.labSize': function (val) {
      this.lineLegend.labSize = val
      this.initEcharts()
    },
    '$store.state.lineLegend.lineColor': function (val) {
      this.lineLegend.lineColor = val
      this.initEcharts()
    },
    '$store.state.lineLegend.pointSize': function (val) {
      this.lineLegend.pointSize = val
      console.log('折线图接收到的拐点大小')
      console.log(this.lineLegend.pointSize)
      this.initEcharts()
    },
    '$store.state.lineLegend.borderColor': function (val) {
      this.lineLegend.borderColor = val
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
