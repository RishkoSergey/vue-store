<template>
  <div class="header">
    <img src="../assets/logo.jpg" class="header__logo" />
    <input class="header__input" placeholder="Поиск товаров..." />
    <div class="header__favorites">
      <img src="../assets/favorites.png" class="header__favorites__icon" />
      <p>Избранное</p>
    </div>
    <button class="header__cart">
      <div v-if="getCart.length" class="header__cart__label">
        {{ getCart.length }}
      </div>
      <img src="../assets/cart.png" class="header__cart__icon" />
      <p>Корзина</p>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["getCart"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  background-color: #fff;
  align-items: center;
  justify-content: stretch;
  height: 60px;
  padding-left: 20px;
  width: calc(100% - 20px);
  &__logo {
    height: 70%;
    margin-right: 10px;
  }
  &__input {
    height: 30px;
    border: 1px solid gray;
    border-radius: 5px;
    padding-left: 5px;
    margin-right: 10px;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  &__favorites,
  &__cart {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    &:hover {
      background-color: #ededed;
    }
    &__icon {
      height: 70%;
      margin-right: 5px;
    }
  }
  &__cart {
    position: relative;
    background-color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    &__label {
      position: absolute;
      top: 16%;
      left: 30%;
      background-color: orange;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
