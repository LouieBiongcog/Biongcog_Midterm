<template>
  <div>
    <ProductForm @product-added="addProduct" />
    <ProductList :products="products" @product-updated="updateProduct" />
  </div>
</template>

<script>
import ProductForm from './ProductForm.vue'
import ProductList from './ProductList.vue'

export default {
  components: {
    ProductForm,
    ProductList,
  },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    addProduct(newProduct) {
      this.products.push(newProduct)
    },
    updateProduct({ index, product }) {
      this.$set(this.products, index, product)
    },
  },
}
</script>

<style scoped>
/* Add your styles here */
</style>
