<template>
  <div class="navbar">
    <div class="navbar__category" @click="openMenu">
      {{ currentCategory }}
    </div>
    <div class="navbar__menu" v-if="showMenu">
      <div
        v-for="category in getCategories"
        :key="category"
        class="navbar__menu__item"
        @click="chooseCategory(category)"
      >
        {{ category }}
      </div>
    </div>
    <div class="navbar__price">
      <p>Цена</p>
      <input class="navbar__price__from" v-model="minPrice" />
      <input class="navbar__price__to" v-model="maxPrice" />
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
      this.currentCategory = " ";
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
  height: 150px;
  border-top: 1px solid #ededed;
}
</style>
