import shop from "./../../api/shop.js";
import {Supermarket} from "../../model/Supermarket";

export default {
  namespaced: true,

  state: {
    supermarket: new Supermarket([])
  },

  getters: {
    availableProducts (state, getters) {
      return state.supermarket.availableProducts()
    },

    productIsInStock () {
      return (product) => {
        return product.hasStock()
      }
    }
  },

  mutations: {
    setProducts (state, products) {
      state.supermarket = new Supermarket(products)
    },

    decrementProductInventory (state, product) {
      state.supermarket.decrementInventoryOf(product)
    }
  },

  actions: {
    fetchProducts({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  }
}
