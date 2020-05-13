import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowHome from '../views/ShowHome'
import ShowChart from '../views/ShowChar'
import DataMart from '../components/mainbar/DataMart'
import Test from '../views/Test'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      component: Test
    },
    {
      path: '*',
      redirect: '/showhome' // 当输入的路由不存在时，默认到该路径（重定向）
    },
    {
      path: '/',
      redirect: '/showhome',
      component: Home,
      children: [
        {
          path: '/showhome',
          component: ShowHome
        },
        {
          path: '/showchart',
          component: ShowChart
        },
        {
          path: '/datamart',
          component: DataMart
        }
      ]
    }

  ]

})

export default router
