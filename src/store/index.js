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
      console.log(product);
      ctx.commit("addToCart", product);
    }
  },
  mutations: {
    fetchProducts(state, data) {
      state.products = data;
    },
    addToCart(state, data) {
      state.cart.push(data);
    }
  },
  state: {
    products: [],
    cart: [],
    currentCategory: "",
    minPrice: null,
    maxPrixe: null
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    }
  }
});
