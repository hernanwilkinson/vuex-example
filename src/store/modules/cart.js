import shop from "./../../api/shop.js";
import {Cart} from "../../model/Cart";

export default {
  namespaced: true,

  state: {
    cart: new Cart(),
    checkoutStatus: null
  },

  getters: {
    cartProducts (state) {
      return state.cart.contents()
    },
    cartTotal (state) {
      return state.cart.total()
    },
  },

  mutations: {
    pushProductToCart (state, product) {
      state.cart.addProduct(product)
    },
    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },
    emptyCart (state) {
      state.cart = new Cart()
    },
    removeProduct(state,product){
      state.cart.removeProduct(product)
    }
  },

  actions: {
    addProductToCart({commit}, product) {
      if (product.hasStock()) {
        commit('pushProductToCart', product)
        commit('products/decrementProductInventory', product, {root: true})
      }
    },
    removeProductFromCart({commit}, product){
      commit('removeProduct',product)
      commit('products/incrementProductInventory', product, {root: true})

    },
    checkout({state, commit}) {
      shop.buyProducts(
        state.cart,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
  }
}
