<template>
  <div class="home">
    <Navbar />
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    ProductsList,
    Navbar
  }
};
</script>

<style lang="scss">
.home {
  margin-top: 60px;
  display: flex;
  padding: 0 20px;
}
</style>
