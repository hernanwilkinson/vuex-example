<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="cartItem in products">
          {{cartItem.productTitle()}} - {{cartItem.productPrice() | currency}} - {{cartItem.quantity()}}
          <button
              @click="removeProductFromCart(cartItem.product())"
          >Remove</button>
        </li>
      </ul>
      <p>Total: {{total | currency}}</p>
      <button @click="checkout">Checkout</button>
      <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),

      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },

    methods: {
      ...mapActions({
        checkout: 'cart/checkout',
        removeProductFromCart: 'cart/removeProductFromCart'
      })    }
  }
</script>

<style scoped>

</style>
