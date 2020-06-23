<template>
  <div class="header">
    <img src="../assets/logo.jpg" class="header__logo" />
    <div class="header__buttons">
      <div class="header__buttons__cart" @click="showPopup = true">
        <div v-if="getCart.length" class="header__buttons__cart-label">
          {{ getCart.length }}
        </div>
        <img src="../assets/cart.png" />
        <p>Корзина</p>
      </div>
    </div>
    <Popup v-if="showPopup" @close="showPopup = false" />
  </div>
</template>

<script>
import Popup from "./Popup";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    Popup
  },
  data: () => ({
    showPopup: false
  }),
  computed: {
    ...mapGetters(["getCart"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  top: 0;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-left: 20px;
  width: calc(100% - 20px);
  &__logo {
    height: 70%;
    margin-right: 10px;
  }
  &__buttons {
    height: 100%;
    display: flex;
    &__favorites,
    &__cart {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 5px;
      &:hover {
        background-color: #ededed;
      }
      img {
        height: 70%;
        margin-right: 5px;
      }
    }
    &__cart {
      position: relative;
      cursor: pointer;
      &-label {
        position: absolute;
        top: 16%;
        left: 30%;
        background-color: orange;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        font-size: 14px;
        text-align: center;
      }
    }
  }
  @media (max-width: 767px) {
    font-size: 13px;
    height: 30px;
    &__buttons {
      &__cart {
        &-label {
          left: 20%;
          font-size: 12px;
          width: 14px;
          height: 14px;
          top: 10%;
        }
      }
    }
  }
}
</style>
