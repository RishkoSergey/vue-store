<template>
  <div class="popup">
    <div class="popup__content">
      <CartList />
      <div class="popup__close" @click="closePopup">
        <img src="../assets/close.png" />
      </div>
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
  &__content {
    position: relative;
    background-color: #fff;
    width: 800px;
    max-width: 100%;
  }
  &__close {
    position: absolute;
    right: 22px;
    top: 22px;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }
  @media (max-width: 767px) {
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
