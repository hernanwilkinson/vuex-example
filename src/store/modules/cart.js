import shop from "./../../api/shop.js";
import {CartItem} from "../../model/CartItem";

export default {
  namespaced: true,

  state: {
    cartItems: [],
    checkoutStatus: null
  },

  getters: {
    cartProducts (state, getters, rootState, rootGetters) {
      return state.cartItems
    },

    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, cartItem) => total + cartItem.total(), 0)
    },
  },

  mutations: {
    pushProductToCart (state, product) {
      state.cartItems.push(new CartItem(product))
    },
    incrementItemQuantity (state, cartItem) {
      cartItem.incrementQuantity()
    },

    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },

    emptyCart (state) {
      state.cartItems = []
    }
  },

  actions: {
    addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        const cartItem = state.cartItems.find(item => item.isFor(product))
        if (!cartItem) {
          commit('pushProductToCart', product)
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        commit('products/decrementProductInventory', product, {root: true})
      }
    },

    checkout({state, commit}) {
      shop.buyProducts(
        state.cartItems,
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
