<template>
  <div class="line">
    <div class="main" ref="main">

    </div>
  </div>
</template>
<script>
const echarts = require('echarts/lib/echarts') // 引入echarts
// 引入提示框和标题组件
require('echarts-gl')

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
        labColor: '#000', // 标签颜色
        labSize: 10, // 标签大小
        pointColor: '#2d2fd2', // 点颜色
        pointSize: 5, // 点大小
        symbol1: 'triangle' // 点形状
      },
      data: null
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
        tooltip: {},
        xAxis3D: {
          name: 'x',
          type: 'value',
          axisLabel: {
            color: this.legend.labColor, // 刻度标签
            fontSize: this.legend.labSize
          }
        },
        yAxis3D: {
          name: 'y',
          type: 'value',
          axisLabel: {
            color: this.legend.labColor, // 刻度标签
            fontSize: this.legend.labSize
          }
        },
        zAxis3D: {
          name: 'z',
          type: 'value',
          axisLabel: {
            color: this.legend.labColor, // 刻度标签
            fontSize: this.legend.labSize
          }
        },
        grid3D: {
          axisLine: {
            lineStyle: {
              color: '#000' // 轴线颜色
            }
          },
          axisPointer: {
            lineStyle: {
              color: '#f00' // 坐标轴指示线
            },
            show: false // 不坐标轴指示线
          },
          viewControl: {
            /*  autoRotate: true,//旋转展示
                projection: 'orthographic' */
            beta: 10
          },
          boxWidth: 150,
          boxHeight: 100,
          boxDepth: 100,
          top: -50
        },
        series: [{
          type: 'scatter3D',
          dimensions: ['a', 'b', 'c'// 显示框信息
          ],
          data: this.data,
          symbolSize: this.legend.pointSize, // 点的大小
          color: this.legend.pointColor, // 点颜色
          symbol: this.legend.symbol1, // 点形状
          itemStyle: {
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.8)'// 边框样式
          },
          emphasis: {
            itemStyle: {
              color: '#ccc'// 高亮
            }
          }
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
  watch: {
    '$store.state.singleFile.date': function (val) {
      const dataT = this.$store.state.singleFile.info.toString().replace(/[\r\n]/g, '')
      const dataT2 = JSON.parse(dataT)
      const arr1 = []
      for (let i = 0; i < dataT2.test.length; i++) {
        const arr2 = []
        arr2[0] = dataT2.test[i].x
        arr2[1] = dataT2.test[i].y
        arr2[2] = dataT2.test[i].z
        arr1[i] = arr2
      }
      this.data = arr1
      console.log('立体柱状图接收到的数据时')
      console.log(this.data)
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
    '$store.state.cubeScatterLegend.backgroundColor': function (val) {
      this.legend.backgroundColor = val
      this.initEcharts()
    },
    '$store.state.cubeScatterLegend.labColor': function (val) {
      this.legend.labColor = val
      this.initEcharts()
    },
    '$store.state.cubeScatterLegend.labSize': function (val) {
      this.legend.labSize = val
      this.initEcharts()
    },
    '$store.state.cubeScatterLegend.pointColor': function (val) {
      this.legend.pointColor = val
      this.initEcharts()
    },
    '$store.state.cubeScatterLegend.pointSize': function (val) {
      this.legend.pointSize = val
      this.initEcharts()
    },
    '$store.state.cubeScatterLegend.symbol': function (val) {
      console.log('立体散点图接收到的点形状时')
      console.log(val)
      this.legend.symbol1 = val
      this.initEcharts()
      console.log('设置的点形状是')
      console.log(this.legend.symbol1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .line{
    .main {
      width: 735px;
      height:650px;
    }
  }
</style>
