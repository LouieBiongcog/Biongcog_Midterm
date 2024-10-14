<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span
          >{{ product.name }} - {{ product.price }} -
          {{ product.description }}</span
        >
        <button @click="editProduct(index)">Edit</button>
      </li>
    </ul>

    <div v-if="editingIndex !== null">
      <h3>Edit Product</h3>
      <input v-model="editingProduct.name" />
      <input v-model.number="editingProduct.price" type="number" />
      <textarea v-model="editingProduct.description"></textarea>
      <button @click="saveProduct">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  data() {
    return {
      editingIndex: null,
      editingProduct: {},
    }
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index
      this.editingProduct = { ...this.products[index] }
    },
    saveProduct() {
      this.$emit('update-product', {
        index: this.editingIndex,
        product: this.editingProduct,
      })
      this.editingIndex = null
    },
    cancelEdit() {
      this.editingIndex = null
    },
  },
}
</script>

<style scoped></style>
