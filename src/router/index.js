import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import PpLogin from'../views/Pplogin.vue'
import Pp from'../views/Pp.vue'
import Lin from'../views/Lin.vue'
import SignUp from'../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pplogin',
    name: 'Pplogin',
    component: PpLogin
  },
  {
    path: '/pp',
    name: 'Pp',
    component: Pp
  },
  {
    path: '/lin',
    name: 'Lin',
    component: Lin
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
