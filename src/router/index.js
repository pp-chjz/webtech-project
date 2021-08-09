import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from'../views/auth/Login.vue'
import SignUp from'../views/auth/SignUp.vue'
import Logout from'../views/auth/Logout.vue'

import Post from'../views/Post.vue'
import Thread from '../views/Thread.vue'

import Leader from'../views/Leader.vue'
import Reward from'../views/Reward.vue'

import History from'../views/RewardHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/History',
    name: 'History',
    component: History
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/leader',
    name: 'Leader',
    component: Leader
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post
  },
  {
    path: '/Thread',
    name: 'Thread',
    component: Thread
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Reward
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
