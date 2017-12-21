import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'

import City from '@/page/city/city'
import Detail from '@/page/detail/detail'
import OneTour from '@/page/OneTour/OneTour'
import Spa from '@/page/Spa/Spa'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/city',
    name: 'city',
    component: City
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '/OneTour',
    name: 'OneTour',
    component: OneTour
  }, {
      path: '/Spa',
      name: 'Spa',
      component: Spa
    }]
    
})
