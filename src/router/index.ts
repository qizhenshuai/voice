import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { BaseLayout, BlankLayout } from '@/layouts'

import Home from '../pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/',
    component: BlankLayout,
    children: [
      {
        path: '401',
        name: 'NotPermission',
        component: () => import(/* webpackChunkName: "401" */ '../pages/error/401.vue')
      },
      {
        path: '404',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "404" */ '../pages/error/404.vue')
      },
      {
        path: '500',
        name: 'ServerError',
        component: () => import(/* webpackChunkName: "500" */ '../pages/error/500.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
