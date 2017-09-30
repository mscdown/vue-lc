// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import VueResource from 'vue-resource';
import more from './components/more/more'
import home from './components/home/home'
import personal from './components/personal/personal'
import detail from './components/detail.vue'
import lc from './components/lc'
import ttdl from './components/lc/ttdl'
import yywy from './components/lc/yywy'
import yrcf from './components/lc/yrcf'
import zrzq from './components/lc/zrzq'
import recommend from './components/lc/recommend'

Vue.use(vueRouter);
Vue.use(VueResource)

// Vue.config.productionTip = false

const router = new vueRouter({
  mode: 'history',
  routes: [
      {
        path:'/',
        redirect: '/lc/recommend'
      },
      {
        path: '/lc',
        component: lc,
        redirect: '/lc/recommend',
        children: [
          {
            path: 'recommend',
            component: recommend
          },
          {
            path: 'ttdl',
            component: ttdl
          },
          {
            path: 'yywy',
            component: yywy
          },
          {
            path: 'yrcf',
            component: yrcf
          },
          {
            path: 'zrzq',
            component: zrzq
          }
        ]
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/more',
      component: more
    },
    {
      path:'/detail',
      component:detail
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
