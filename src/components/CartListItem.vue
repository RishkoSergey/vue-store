<template>
  <div class="product">
    <div class="product__image">
      <img :src="product.image" />
    </div>
    <div class="product__category">
      {{ product.category }}
    </div>
    <div class="product__name">
      {{ product.name }}
    </div>
    <div class="product__price">{{ product.price }} ₽</div>
    <div class="product__changeCount">
      <div @click="decCount">-</div>
      {{ count }}
      <div @click="incCount">+</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartListItem",
  props: ["product"],
  data: () => ({
    count: 0
  }),
  mounted() {
    this.count = this.product.count;
    console.log(this.count);
  },
  methods: {
    ...mapActions(["editCart", "removeFromCart"]),
    decCount() {
      if (this.count > 0) this.count--;
      this.editCart(this.product.id, this.count);
    },
    incCount() {
      if (this.count < 10) this.count++;
      this.editCart(this.product.id, this.count);
    },
    addProduct() {
      if (this.count) {
        this.product.count = this.count;
        this.addToCart(this.product);
        this.count = 0;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  width: 100%;
  height: 30vh;
  &__image {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 80%;
      max-height: 80%;
    }
  }
  &__name,
  &__price,
  &__category,
  &__changeCount {
    padding: 0 10px;
    width: calc(100% - 20px);
  }
  &__changeCount {
    display: flex;
  }
}
</style>
