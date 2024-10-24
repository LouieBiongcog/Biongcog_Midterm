<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-container">
      <ul class="nav-links">
        <router-link to="/home" class = "nav-item">Home</router-link>
      <router-link to="/products" class = "nav-item">Products</router-link>
      </ul>
    </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [] 
    };
  },
  methods: {
    addProduct(product) {
      this.products.push({ ...product, isEditing: false });
    },
    updateProduct(index, updatedProduct) {
      this.$set(this.products, index, updatedProduct);
    }
  }
};
</script>
<style scoped>
 .navbar {
  background-color: #007bff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: larger;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    position: absolute;
    background-color: #007bff;
    top: 60px;
    right: 0;
    width: 100%;
    display: none;
    animation: slideDown 0.3s ease forwards;
  }

  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-item {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
