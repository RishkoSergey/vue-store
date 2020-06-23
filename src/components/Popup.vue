<template>
  <div class="popup">
    <div class="popup__content">
      <CartList />
      <div class="popup__close" @click="closePopup">
        <img src="../assets/close.png" />
      </div>
      <button class="popup__checkout" @click="closePopup">
        <router-link class="popup__link" to="/checkout">
          Оформить заказ
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import CartList from "./CartList";
import { mapGetters } from "vuex";

export default {
  name: "Popup",
  components: {
    CartList
  },
  computed: {
    ...mapGetters(["getCart"])
  },
  methods: {
    closePopup: function() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.popup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 10;
  &__content {
    position: relative;
    background-color: white;
    width: 800px;
    min-height: 100px;
    max-width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  &__checkout {
    width: 150px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid gray;
    background-color: #ededed;
  }
  &__link {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 767px) {
    margin-left: -20px;
    &__content {
      box-shadow: none;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
