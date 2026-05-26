import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/plugin/:id', component: Detail, name: 'detail' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } // 切换页面时自动回到顶部
  }
})