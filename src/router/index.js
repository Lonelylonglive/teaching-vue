import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Spa from '@/page/spa/spa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/spa/:id',
      name: 'spa',
      component: Spa
    }
  ]
})
