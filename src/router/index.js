import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductManager from '../components/ProductManager.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/products', component: ProductManager },
  { path: '/', redirect: '/home' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
