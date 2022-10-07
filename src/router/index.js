import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/song',
    name: 'Song',
    component: () => import('@/views/song/song.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search/search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
