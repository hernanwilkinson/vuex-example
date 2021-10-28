<template>
  <div id="app">
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>


