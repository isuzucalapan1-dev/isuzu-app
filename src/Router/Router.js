import { createRouter, createWebHistory } from 'vue-router'

// Pages
import LogIn from '../Pages/LogIn.vue'
import Dashboard from '../Pages/Admin/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
