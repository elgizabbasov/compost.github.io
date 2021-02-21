import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  }
  ,
  {
    path: '/register',
    name: 'Register',
  
    component: () => import('../views/Register.vue')
  },
  {
    path: '/composting',
    name: 'Composting',
  
    component: () => import('../views/Composting.vue')
  },
  {
    path: '/importance',
    name: 'Importance',
  
    component: () => import('../views/Importance.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
