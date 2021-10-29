import shop from "./../../api/shop.js";
import {CartItem} from "../../model/CartItem";

export default {
  namespaced: true,

  state: {
    // {id, quantity}
    items: [],
    cartItems: [],
    checkoutStatus: null
  },

  getters: {
    cartProducts (state, getters, rootState, rootGetters) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },
  },

  mutations: {
    pushProductToCart (state, product) {
      state.items.push({
        id: product.id,
        quantity: 1
      })
      state.cartItems.push(new CartItem(product))
    },

    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },
    incrementItemQuantity2 (state, cartItem2) {
      cartItem2.incrementQuantity()
    },

    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },

    emptyCart (state) {
      state.items = []
    }
  },

  actions: {
    addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
      if (rootGetters['products/productIsInStock'](product)) {
        const cartItem = state.items.find(item => item.id === product.id)
        const cartItem2 = state.cartItems.find(item => item.isFor(product))
        if (!cartItem) {
          commit('pushProductToCart', product)
        } else {
          commit('incrementItemQuantity', cartItem)
          commit('incrementItemQuantity2', cartItem2)
        }
        commit('products/decrementProductInventory', product, {root: true})
      }
    },

    checkout({state, commit}) {
      shop.buyProducts(
        state.items,
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
