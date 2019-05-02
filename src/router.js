import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import User from './views/User.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/user'
    },
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) { next('user') } else { next() }
})

export default router
