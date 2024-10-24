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
  background-image: url('../assets/bg1-transformed.png'); 
  background-size: cover; 
  background-position: center; 
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
</style>