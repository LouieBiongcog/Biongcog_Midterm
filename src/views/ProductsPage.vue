<!-- src/views/ProductsPage.vue -->
<template>
  <div>
    <ProductForm :initialProduct="currentProduct" @submit-product="handleProductSubmit" />
    <ProductList :products="products" @edit-product="handleEditProduct" />
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    ProductForm,
    ProductList,
  },
  data() {
    return {
      products: [], // Your products array
      currentProduct: null, // Track the current product for editing
    };
  },
  methods: {
    handleProductSubmit(product) {
      if (product.id) {
        // If there is an id, update the product
        const index = this.products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.products.splice(index, 1, product); // Update the product
        }
      } else {
        // Otherwise, add a new product
        product.id = Date.now(); // Example to generate a unique ID
        this.products.push(product);
      }
      this.currentProduct = null; // Reset current product after submission
    },
    handleEditProduct(product) {
      this.currentProduct = product; // Set the current product to edit
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
