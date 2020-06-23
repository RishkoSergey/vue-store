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
  display: flex;
  padding: 0 20px;
  @media (max-width: 767px) {
    padding: 0;
    display: block;
  }
}
</style>
