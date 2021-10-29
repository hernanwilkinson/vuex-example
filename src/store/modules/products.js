import shop from "./../../api/shop.js";

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    availableProducts (state, getters) {
      return state.items.filter(product => product.hasStock())
    },

    productIsInStock () {
      return (product) => {
        return product.hasStock()
      }
    }
  },

  mutations: {
    setProducts (state, products) {
      // update products
      state.items = products
    },

    decrementProductInventory (state, product) {
      product.decrementInventory()
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
