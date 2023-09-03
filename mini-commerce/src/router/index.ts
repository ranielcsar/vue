import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const CartView = () => import('../views/CartView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.API_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router
