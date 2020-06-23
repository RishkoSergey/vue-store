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
    <div class="product__cart">
      <div class="product__cart__price">{{ product.price }} ₽</div>
      <div class="product__cart__changeCount">
        <div class="count-button" @click="decCount">-</div>
        <p>{{ count }}</p>
        <div class="count-button" @click="incCount">+</div>
      </div>
      <div @click="addProduct" class="product__cart__add">
        Добавить в корзину
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductsCard",
  props: ["product"],
  data: () => ({
    count: 0
  }),
  methods: {
    ...mapActions(["addToCart"]),
    decCount() {
      if (this.count > 0) this.count--;
    },
    incCount() {
      if (this.count < 10) this.count++;
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
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  font-size: 14px;
  width: 100%;
  height: 60vh;
  position: relative;
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
  &__category,
  &__cart {
    padding: 0 10px;
    width: calc(100% - 20px);
  }
  &__category {
    font-size: 12px;
    color: gray;
  }
  &__name {
    margin-bottom: 10px;
  }
  &__cart {
    position: absolute;
    bottom: 5%;
    &__changeCount {
      margin-bottom: 10px;
      display: flex;
      p {
        margin: 0 10px;
      }
    }
    &__price {
      font-weight: 600;
      margin-bottom: 10px;
    }
    &__add {
      cursor: pointer;
      background-color: #ededed;
      border: 1px solid gray;
      border-radius: 5px;
      text-align: center;
    }
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
