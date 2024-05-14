import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayouts',
      component: () => import('@/components/layout/index.vue'),
      redirect: '/',
      children:[
        {
          path: '/',
          name: 'main',
          component: () => import('@/pages/main-page.vue')
        },
        {
          path: '/basket',
          name: 'basket',
          component: () => import('@/pages/basket-page.vue')
        },
        {
          path: '/info',
          name: 'info',
          component: () => import('@/pages/info-page.vue')
        },
      ]
      }
  ]
})

export default router
