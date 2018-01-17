import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/components/HelloFromVux'
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
