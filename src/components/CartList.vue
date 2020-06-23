<template>
  <div class="list">
    <div class="cartList">
      <CartListItem
        v-for="product in getCart"
        :key="product.id"
        :product="product"
      />
    </div>
    <p class="sum">Сумма: {{ getSum }}</p>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
.sum {
  text-align: center;
  font-weight: 600;
  margin-top: 15px;
}
.list {
  background-color: #fff;
  border-top: 1px solid #ededed;
}
</style>
