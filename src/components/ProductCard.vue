<template>
  <div class="product">
    <div class="product__image">
      <img :src="product.image" />
    </div>
    <div class="product__name">
      {{ product.name }}
    </div>
    <div class="product__price">{{ product.price }} ₽</div>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: ["product"]
};
</script>

<style scoped lang="scss">
.product {
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  width: 100%;
  height: 60vh;
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
  &__price {
    padding: 0 10px;
    width: calc(100% - 20px);
  }
}
</style>
