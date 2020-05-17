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
        lineColor: '#000', // 引导线颜色
        length: 5, // 线一长度
        length2: 10, // 线二长度
        backgroundColor: '#d2dde6', // 背景颜色
        labColor: '#000', // 标签颜色
        labSize: 10 // 标签大小
      },
      data: [{
        value: 235,
        name: '视频广告'
      }, {
        value: 274,
        name: '联盟广告'
      }, {
        value: 310,
        name: '邮件营销'
      }, {
        value: 335,
        name: '直接访问'
      }, {
        value: 400,
        name: '搜索引擎'
      }]
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
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          clockwise: 'true',
          startAngle: '0',
          center: ['50%', '50%'],
          data: this.data,
          label: {
            color: this.legend.labColor,
            fontSize: this.legend.labSize
          },
          labelLine: {
            lineStyle: {
              color: this.legend.lineColor // 引导线颜色
            },
            smooth: 0.1,
            length: this.legend.length,
            length2: this.legend.length2
          },
          // 配置样式
          itemStyle: {
            // 通常情况下：
            normal: {
              // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                const colorList = ['rgb(238,41,53)', 'rgb(129,68,210)', 'rgb(25,46,94)', 'rgb(13,169,17)', 'rgb(238,41,53)', 'rgb(129,68,210)', 'rgb(25,46,94)', 'rgb(13,169,17)']
                return colorList[params.dataIndex]
              }
            }
          }
        }]
      })
    }
  },
  mounted () {
    this.initEcharts()
  },
  watch: {
    '$store.state.singleFile.date': function (val) {
      console.log('pie得到的数据')
      console.log(this.$store.state.singleFile.info)
      this.data = this.$store.state.singleFile.info
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
    '$store.state.pieLegend.backgroundColor': function (val) {
      this.legend.backgroundColor = val
      this.initEcharts()
    },
    '$store.state.pieLegend.lineColor': function (val) {
      this.legend.lineColor = val
      console.log('饼图接收到的线颜色')
      console.log(this.legend.lineColor)
      this.initEcharts()
    },
    '$store.state.pieLegend.length1': function (val) {
      this.legend.length = val
      this.initEcharts()
    },
    '$store.state.pieLegend.length2': function (val) {
      this.legend.length2 = val
      this.initEcharts()
    },
    '$store.state.pieLegend.labColor': function (val) {
      this.legend.labColor = val
      this.initEcharts()
    },
    '$store.state.pieLegend.labSize': function (val) {
      this.legend.labSize = val
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
