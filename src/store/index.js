import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async fetchProducts(ctx) {
      await axios.get("/products.json").then(res => {
        ctx.commit("fetchProducts", res.data);
      });
    },
    addToCart(ctx, product) {
      ctx.commit("addToCart", product);
    },
    setCategory(ctx, category) {
      ctx.commit("setCategory", category);
    },
    setMinPrice(ctx, minPrice) {
      ctx.commit("setMinPrice", minPrice);
    },
    setMaxPrice(ctx, maxPrice) {
      ctx.commit("setMaxPrice", maxPrice);
    }
  },
  mutations: {
    fetchProducts(state, data) {
      state.products = data;
    },
    addToCart(state, product) {
      if (state.cart.find(elem => elem.id === product.id))
        state.cart.find(elem => elem.id === product.id).count += product.count;
      else state.cart.push(product);
    },
    setCategory(state, category) {
      state.currentCategory = category;
    },
    setMinPrice(state, minPrice) {
      state.minPrice = minPrice;
    },
    setMaxPrice(state, maxPrice) {
      state.maxPrice = maxPrice;
      console.log(state.maxPrice);
    }
  },
  state: {
    products: [],
    cart: [],
    currentCategory: "Все товары",
    minPrice: null,
    maxPrice: null
  },
  getters: {
    getProducts(state) {
      let currentList = null;
      if (state.currentCategory !== "Все товары")
        currentList = (currentList || state.products).filter(
          product => product.category == state.currentCategory
        );
      if (state.minPrice)
        currentList = (currentList || state.products).filter(
          product => product.price >= state.minPrice
        );
      if (state.maxPrice)
        currentList = (currentList || state.products).filter(
          product => product.price <= state.maxPrice
        );
      return currentList || state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getCategories(state) {
      const categories = ["Все товары"];
      state.products.forEach(product => {
        if (!categories.includes(product.category))
          categories.push(product.category);
      });
      return categories;
    }
  }
});
