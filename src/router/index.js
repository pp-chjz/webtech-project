import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Lin from'../views/Lin.vue'

import Pp from'../views/Pp.vue'
import Login from'../views/auth/Login.vue'
import SignUp from'../views/auth/SignUp.vue'
import Logout from'../views/auth/Logout.vue'

import Post from'../views/Post.vue'
import Thread from '../views/Thread.vue'



import Leader from'../views/Leader.vue'
import Reward from'../views/Reward.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
