<template>
  <div class="navbar">
    <div class="navbar__price">
      <p>Цена от</p>
      <input min="0" type="number" v-model="minPrice" />
      <p>до</p>
      <input min="0" type="number" v-model="maxPrice" />
    </div>
    <div class="navbar__menu">
      <div
        v-for="category in getCategories"
        :key="category"
        :class="['navbar__menu__item', setActive(category)]"
        @click="chooseCategory(category)"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  data: () => ({
    currentCategory: "Все товары",
    showMenu: false,
    minPrice: "",
    maxPrice: ""
  }),
  computed: {
    ...mapGetters(["getCategories"])
  },
  methods: {
    ...mapActions(["setCategory", "setMinPrice", "setMaxPrice"]),
    chooseCategory(category) {
      this.setCategory(category);
      this.showMenu = false;
      this.currentCategory = category;
    },
    openMenu() {
      this.showMenu = true;
    },
    setActive(category) {
      return category == this.currentCategory ? "active-item" : "";
    }
  },
  watch: {
    minPrice: function() {
      this.setMinPrice(Number(this.minPrice));
    },
    maxPrice: function() {
      this.setMaxPrice(Number(this.maxPrice));
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 30%;
  background-color: #fff;
  border-top: 1px solid #ededed;
  padding: 10px;
  &__price {
    display: flex;
    input {
      width: 24%;
      margin: 0 5px;
      &:focus {
        outline: 0;
      }
      &::-webkit-inner-spin-button {
        display: none;
      }
    }
  }
  &__menu {
    margin-top: 10px;
    &__item {
      margin-top: 5px;
      padding: 5px;
      border: 1px solid #ededed;
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    font-size: 13px;
    &__menu {
      display: flex;
      flex-flow: row wrap;
      &__item {
        width: 25%;
      }
    }
  }
}
.active-item {
  border: 1px solid red;
}
</style>
