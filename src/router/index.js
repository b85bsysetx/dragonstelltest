import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  // 靜態 routes
  {
    path: '/',
    name: 'Home',
    component: () => import('@v/home'),
    meta: {
      title: '中龍鋼鐵資安專區',
    },
  },
  {
    path: '/403',
    name: 'Page403',
    component: () => import('app-plugin/pages/errors/Page403.vue'),
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('app-plugin/pages/errors/Page404.vue'),
  },
  {
    path: '/500',
    name: 'Page500',
    component: () => import('app-plugin/pages/errors/Page500.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
