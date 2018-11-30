import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Main from '@/pages/Main/Main'
import Default from '@/pages/Default/Default'
import Form from '@/pages/Form/Form'
import List from '@/pages/List/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'default',
          name: 'Default',
          component: Default
        },
        {
          path: 'form',
          name: 'Form',
          component: Form
        },
        {
          path: 'list',
          name: 'List',
          component: List
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
