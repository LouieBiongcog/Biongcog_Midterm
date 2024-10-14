import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';       // Corrected path
import ProductsPage from '../views/ProductsPage.vue'; // Corrected path

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/products', component: ProductsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
