import { createApp } from 'vue';  // Import Vue 3's createApp
import App from './App.vue';      // Import your root component
import router from './router';    // Import router (which should include routes to HomePage and ProductsPage)

// You don't need to import HomePage or ProductsPage here, it's handled by the router
// If you are importing views directly, here's how the paths should look:
// import HomePage from './views/HomePage.vue';
// import ProductsPage from './views/ProductsPage.vue';

const app = createApp(App);
app.use(router);                  // Use the router
app.mount('#app');                // Mount the Vue app
