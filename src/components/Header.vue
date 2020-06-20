<template>
  <div class="header">
    <img src="../assets/logo.jpg" class="header__logo" />
    <input class="header__input" placeholder="Поиск товаров..." />
    <div class="header__favorites">
      <img src="../assets/favorites.png" class="header__favorites__icon" />
      <p>Избранное</p>
    </div>
    <div class="header__cart">
      <img src="../assets/cart.png" class="header__cart__icon" />
      <p>Корзина</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
}
</style>
