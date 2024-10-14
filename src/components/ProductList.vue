<!-- src/components/ProductList.vue -->
<template>
  <div class="product-list-container">
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        <span>{{ product.name }} - {{ product.price }} - {{ product.description }}</span>
        <button @click="editProduct(product)" class="edit-button">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    editProduct(product) {
      this.$emit('edit-product', product); // Emit the event with the product data
    },
  },
};
</script>

<style scoped>
.product-list-container {
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}

.product-item:last-child {
  border-bottom: none;
}

.edit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
