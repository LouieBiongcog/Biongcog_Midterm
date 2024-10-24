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
      products: [],
      currentProduct: null, 
    };
  },
  methods: {
    handleProductSubmit(product) {
      if (product.id) {
       
        const index = this.products.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          this.products.splice(index, 1, product); 
        }
      } else {
       
        product.id = Date.now();
        this.products.push(product);
      }
      this.currentProduct = null;
    },
    handleEditProduct(product) {
      this.currentProduct = product; 
    },
  },
};
</script>
