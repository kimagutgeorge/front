import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Forgot from '@/views/Forgot.vue'
import Home from '@/views/Home.vue'
import Events from '@/views/Events.vue'
import Categories from '@/views/Categories.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
   path:'/forgot',
   name: 'Forgot',
   component: Forgot
  },
  {
    path:'/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/events',
    name: 'Events',
    component: Events
  },
  {
    path:'/categories',
    name: 'Categories',
    component: Categories
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
