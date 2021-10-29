export class CartItem {

    // Esta abstracción no está buena. Lo mejor sería que Cart conozca un bag de
    // products y que la cantidad la maneje directamente el carrito, asi no tenemos
    // un objeto mutable, se puede controlar mejor la cantidad, etc.
    constructor(product) {
        this.id = product.id
        this._product = product
        this._quantity = 1
    }

    isFor(product) {
        return this._product === product
    }

    quantity() {
        return this._quantity
    }

    incrementQuantity() {
        this._quantity++
    }

    decrementQuantity() {
        this._quantity--
    }

    hasNoQuantity() {
        return this._quantity === 0
    }

    total() {
        return this.productPrice()*this.quantity()
    }

    productPrice() {
        return this._product.price()
    }

    productTitle() {
        return this._product.title()
    }
}
