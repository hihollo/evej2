import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShowHome from '../views/home/ShowHome'
import OptionHistogram from '../views/home/OptionHistogram'
import DataMart from '../components/mainbar/DataMart'
import Test from '../views/Test'
import Histogram from '../components/twodemendion/Histogram'
import OptionLine from '../views/home/OptionLine'
import Line from '../components/twodemendion/Line'
import OptionPie from '../views/home/OptionPie'
import Pie from '../components/twodemendion/Pie'
import OptionScatterplot from '../views/home/OptionScatterplot'
import Scatterplot from '../components/twodemendion/Scatterplot'
import OptionFunnel from '../views/home/OptionFunnel'
import Funnel from '../components/gradation/Funnel'
import OptionCubeScatter from '../views/home/OptionCubeScatter'
import CubeScatter from '../components/spacediagram/CubeScatter'
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
      component: Home,
      redirect: '/showhome',
      children: [
        {
          path: '/showhome',
          component: ShowHome
        },
        {
          path: '/optionhistogram',
          component: OptionHistogram,
          children: [
            {
              path: '/optionhistogram/histogram',
              component: Histogram
            }
          ]
        },
        {
          path: '/optionline',
          component: OptionLine,
          children: [
            {
              path: '/optionline/line',
              component: Line
            }
          ]
        },
        {
          path: '/optionpie',
          component: OptionPie,
          children: [
            {
              path: '/optionpie/pie',
              component: Pie
            }
          ]
        },
        {
          path: '/optionscatterplot',
          component: OptionScatterplot,
          children: [
            {
              path: '/optionscatterplot/scatterplot',
              component: Scatterplot
            }
          ]
        },
        {
          path: '/optionfunnel',
          component: OptionFunnel,
          children: [
            {
              path: '/optionfunnel/funnel',
              component: Funnel
            }
          ]
        },
        {
          path: '/optioncubescatter',
          component: OptionCubeScatter,
          children: [
            {
              path: '/optioncubescatter/cubescatter',
              component: CubeScatter
            }
          ]
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
