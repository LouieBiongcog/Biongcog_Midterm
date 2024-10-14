<template>
  <div class="form">
    <form @submit.prevent="submitProduct">
      <input v-model="product.name" placeholder="Product Name" required />
      <input
        v-model.number="product.price"
        placeholder="Price"
        type="number"
        required
      />
      <textarea
        v-model="product.description"
        placeholder="Description"
        required
      ></textarea>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: null,
        description: '',
      },
    }
  },
  methods: {
    submitProduct() {
      this.$emit('add-product', { ...this.product })
      this.product.name = ''
      this.product.price = null
      this.product.description = ''
    },
  },
}
</script>

<style scoped>
.form {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0);
}
form {
  display: flex;
  flex-direction: column;
  margin: 100px;
}
input {
  margin: 10px;
}
textarea {
  margin: 10px;
}
</style>
