<template>
  <div class="intro">
    <h1>Louiejay Biongcog</h1>
    <h2>BSIT - 3</h2>
    <router-link to="/products">Go to Product List</router-link>
    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.background-image {
  background-image: url('.assets/bg1-transformed.png');
  height: 100vh;
  background-size: cover;
}
.intro {
  text-align: center;
}
</style>
