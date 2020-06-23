<template>
  <div class="list">
    <ProductCard
      v-for="product in getProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductsList",
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(["fetchProducts"])
  }
};
</script>

<style scoped lang="scss">
.list {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  border-left: 1px solid #ededed;
  border-top: 1px solid #ededed;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    width: calc(100% + 1px);
  }
}
</style>
