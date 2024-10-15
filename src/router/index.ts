import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import viewsRouter from './views'

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      isSideBar: false, //
      title: '登录'
    },
    alias: '/login',
    component: () => import('@/view/sys_common/login.vue')
  },

  {
    path: '/:pathMatch(.*)', // 或者 /:pathMatch(.*)*
    name: '404',
    meta: {
      isSideBar: false, // 自定义添加的属性
      title: '404'
    },
    component: () => import('@/view/sys_common/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...viewsRouter]
})

export default router