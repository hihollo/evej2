import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import XLSX from 'xlsx'

import axios from 'axios'
import echarts from 'echarts'
import 'echarts-gl'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(XLSX)
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
