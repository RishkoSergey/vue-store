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
      <div class="count-button" @click="decCount">-</div>
      <p>{{ count }}</p>
      <div class="count-button" @click="incCount">+</div>
    </div>
    <img
      class="product__remove"
      src="../assets/delete.png"
      @click="removeFromCart(product.id)"
    />
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
  },
  methods: {
    ...mapActions(["editCart", "removeFromCart"]),
    decCount() {
      if (this.count > 1) {
        this.count--;
        this.product.count = this.count;
        this.editCart(this.product);
      }
    },
    incCount() {
      if (this.count < 10) {
        this.count++;
        this.product.count = this.count;
        this.editCart(this.product);
      }
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
  height: 40vh;
  position: relative;
  font-size: 14px;
  text-align: center;
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
  &__price {
    font-weight: 600;
  }
  &__changeCount {
    position: absolute;
    bottom: 5%;
    display: flex;
    justify-content: center;
    p {
      margin: 0 10px;
    }
  }
  &__remove {
    position: absolute;
    top: 8%;
    left: 60%;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
.count-button {
  background-color: #ededed;
  width: 18px;
  height: 18px;
  text-align: center;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
}
</style>
