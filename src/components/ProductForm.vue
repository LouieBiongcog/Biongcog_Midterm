<template>
  <div class="product-form-container">
    <h2 class="form-title">{{ isEditing ? 'Edit Product' : 'Add Product' }}</h2>
    <form @submit.prevent="handleSubmit">
      <input v-model="product.name" placeholder="Product Name" required />
      <input v-model="product.price" placeholder="Product Price" required />
      <textarea v-model="product.description" placeholder="Product Description" required></textarea>
      <button type="submit" class="submit-button">{{ isEditing ? 'Update' : 'Add' }} Product</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialProduct: Object,
  },
  data() {
    return {
      product: {
        id: null,
        name: '',
        price: '₱',
        description: '',
      },
      isEditing: false, 
    };
  },
  watch: {
    initialProduct: {
      handler(newValue) {
        if (newValue) {
          this.product = { ...newValue };
          this.isEditing = true; 
        }
      },
      immediate: true, 
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit-product', this.product); 
      this.resetForm(); 
    },
    resetForm() {
      this.product = { id: null, name: '', price: '₱', description: '' };
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.product-form-container {
  width: 100%;
  max-width: 400px;
  margin: 2rem auto 0;
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-form-container:hover {
  transform: scale(1.02);
}

.form-title {
  text-align: center;
  font-size: 1.5rem;
  color: #00796b;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #00796b;
  outline: none;
}

.submit-button {
  padding: 0.8rem;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #004d40;
}
</style>
