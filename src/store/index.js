import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileNum: 0, // 上传文件的数目
    fileInfo: [],
    tableData: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
