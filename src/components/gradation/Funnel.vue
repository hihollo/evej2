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
        backgroundColor: '#d2dde6', // 背景颜色
        labSize: 10, // 标签大小
        borderWidth: 0, // 每层之间的距离
        length: 5 // 引导线长度
      },
      data: [{
        value: 43,
        name: '视频广告'
      }, {
        value: 27,
        name: '联盟广告'
      }, {
        value: 3,
        name: '邮件营销'
      }, {
        value: 5,
        name: '直接访问'
      }, {
        value: 40,
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
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            top: 60,
            // x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              fontSize: this.legend.labSize // 标签大小
            },
            labelLine: {
              length: this.legend.length,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: this.legend.borderWidth // 每层之间的距离
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: this.data
          }
        ],
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
      this.title.x = this.$store.state.chartTitle.titleAcross
      this.initEcharts()
    },
    '$store.state.chartTitle.titleVertical': function (val) {
      this.title.y = this.$store.state.chartTitle.titleVertical
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
    '$store.state.funnelLegend.backgroundColor': function (val) {
      this.legend.backgroundColor = val
      console.log('漏斗图接收到的背景颜色是')
      console.log(this.legend.backgroundColor)
      this.initEcharts()
    },
    '$store.state.funnelLegend.labSize': function (val) {
      this.legend.labSize = val
      this.initEcharts()
    },
    '$store.state.funnelLegend.borderWidth': function (val) {
      this.legend.borderWidth = val
      this.initEcharts()
    },
    '$store.state.funnelLegend.length': function (val) {
      this.legend.length = val
      this.initEcharts()
    }
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
