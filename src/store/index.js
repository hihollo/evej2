import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartType: '', // 显示不同的legendBarShow，如柱状图和饼图的样式就不同
    fileNum: 0, // 上传文件的数目
    fileInfo: [], // 存储所用上传的文件信息
    singleFile: { date: '0', info: null }, // date:监视更新 info存放单个文件信息（向图形组件传递数据）
    chartTitle: { id: '', text: '', titleAcross: '', titleVertical: '', wordFamily: '', wordSize: '', titleColor: '' },
    histogramLegend: { backgroundColor: '', postColor: '', postRadius: '', labColor: '', labSize: '' },
    lineLegend: { backgroundColor: '', labColor: '', labSize: '', lineColor: '', pointSize: '', borderColor: '' },
    pieLegend: { backgroundColor: '', lineColor: '', length1: '', length2: '', labColor: '', labSize: '' },
    scatterLegend: { backgroundColor: '', labColor: '', labSize: '', symbolSize: '', symbol: '', color: '' },
    funnelLegend: { backgroundColor: '', labSize: '', borderWidth: '', length: '' },
    cubeScatterLegend: { backgroundColor: '', labColor: '', labSize: '', pointColor: '', pointSize: '', symbol: '' }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
