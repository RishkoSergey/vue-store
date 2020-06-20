<template>
  <div id="app">
    <Header />
    <div class="main">
      <Navbar />
      <ProductsList />
    </div>
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    ProductsList,
    Header,
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  background-color: #ededed;
}
.main {
  margin-top: 60px;
  display: flex;
  padding: 0 20px;
}
</style>
