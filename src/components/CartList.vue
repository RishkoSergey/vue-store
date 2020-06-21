<template>
  <div>
    <div class="cartList">
      <CartListItem
        v-for="product in getCart"
        :key="product.id"
        :product="product"
      />
    </div>
    Full Price {{ getSum }}
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["getCart", "getSum"])
  }
};
</script>

<style lang="scss">
.cartList {
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin-top: 62px;
}
</style>
