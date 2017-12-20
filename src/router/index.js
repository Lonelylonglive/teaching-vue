import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import OneTour from '@/page/OneTour/OneTour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/OneTour',
      name: 'OneTour',
      component: OneTour
    }
  ]
})
