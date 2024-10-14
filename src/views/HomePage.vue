<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page">
    <h1>LOUIEJAY BIONGCOG</h1>
    <p>BSIT - 3</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>
<style>
.home-page {
  background-image: url('../assets/bg1-transformed.png'); /* Ensure the path is correct */
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  height: 100vh; /* Full viewport height */
  color: white; /* Text color for contrast */
  display: flex; /* Enable flexbox */
  flex-direction: column; /* Arrange items in a column */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text */
  padding: 20px; /* Add some padding */
}
</style>