import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Blank from './views/Blank.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/*',
      name: 'blank',
      component: Blank
    }
  ]
})
