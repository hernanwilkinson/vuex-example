export class CartItem {

    // Esta abstracción no está buena. Lo mejor sería que Cart conozca un bag de
    // products y que la cantidad la maneje directamente el carrito, asi no tenemos
    // un objeto mutable, se puede controlar mejor la cantidad, etc.
    constructor(product) {
        this.id = product.id
        this._product = product
    }

    isFor(product) {
        return this._product === product
    }

    get quantity() {
        if(!this.hasOwnProperty('_quantity'))
            this._quantity = 1
        return this._quantity
    }

    set quantity(value) {
        this._quantity = value
    }

    incrementQuantity() {
        this.quantity ++
    }

    decrementQuantity() {
        this.quantity --
    }

    hasNoQuantity() {
        return this.quantity === 0
    }

    total() {
        return this.productPrice()*this.quantity
    }

    productPrice() {
        return this._product.price()
    }

    productTitle() {
        return this._product.title()
    }

    product(){
        return this._product
    }
}
