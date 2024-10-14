<!-- src/components/ProductForm.vue -->
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
        id: null, // Add an id field to track the product being edited
        name: '',
        price: '',
        description: '',
      },
      isEditing: false, // Track if the form is in edit mode
    };
  },
  watch: {
    initialProduct: {
      handler(newValue) {
        if (newValue) {
          this.product = { ...newValue };
          this.isEditing = true; // Set to true when in edit mode
        }
      },
      immediate: true, // Trigger the watch immediately
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit-product', this.product); // Emit product data
      this.resetForm(); // Reset form after submission
    },
    resetForm() {
      this.product = { id: null, name: '', price: '', description: '' };
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.product-form-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem; /* Increased padding for a more spacious feel */
  background: linear-gradient(135deg, #e0f7fa, #ffffff); /* Beautiful gradient */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Deeper shadow for a more pronounced effect */
  transition: transform 0.3s ease; /* Smooth transform effect */
}

.product-form-container:hover {
  transform: scale(1.02); /* Slight scale effect on hover */
}

.form-title {
  text-align: center; /* Center title */
  font-size: 1.5rem; /* Title size */
  color: #00796b; /* Color for title */
  margin-bottom: 1rem; /* Space below title */
}

form {
  display: flex;
  flex-direction: column; /* Stack inputs vertically */
}

input,
textarea {
  padding: 0.8rem; /* Padding for inputs */
  margin-bottom: 1rem; /* Space below inputs */
  border: 1px solid #ccc; /* Light border */
  border-radius: 6px; /* Rounded input corners */
  transition: border 0.3s ease; /* Transition effect for border */
}

input:focus,
textarea:focus {
  border-color: #00796b; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.submit-button {
  padding: 0.8rem; /* Padding for button */
  background-color: #00796b; /* Button color */
  color: white; /* Text color */
  border: none; /* No border */
  border-radius: 6px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Transition for background color */
}

.submit-button:hover {
  background-color: #004d40; /* Darker button color on hover */
}
</style>
