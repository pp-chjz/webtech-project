import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PpLogin from'../views/Pplogin.vue'
import Pp from'../views/Pp.vue'
import Leader from'../views/Leader.vue'
import Dew from'../views/Dew.vue'
import Reward from'../views/Reward.vue'
import AddReward from'../views/AddReward.vue'

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
    path: '/leader',
    name: 'Leader',
    component: Leader
  },
  {
    path: '/dew',
    name: 'Dew',
    component: Dew
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Reward
  },
  {
    path: '/addreward',
    name: 'AddReward',
    component: AddReward
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
