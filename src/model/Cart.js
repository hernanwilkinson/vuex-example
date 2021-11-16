import {CartItem} from "./CartItem"

export const PRODUCT_NOT_IN_CART = 'Product not in cart'

export class Cart {
    constructor() {
        this._contents = []
    }

    isEmpty() {
        return this._contents.length === 0
    }

    addProduct(product) {
        this.withCartItemOfProductDo(
            product,
            cartItem => cartItem.incrementQuantity(),
            () => this._contents.push(new CartItem(product)))
    }

    quantityOf(product) {
        return this.withCartItemOfProductDo(
            product,
            cartItem => cartItem.quantity,
            () => 0
        )
    }

    contents() {
        return this._contents
    }

    withCartItemOfProductDo(product, ifFound, ifNotFound) {
        const cartItem = this._contents.find(cartItem => cartItem.isFor(product))
        if (!cartItem)
            return ifNotFound()
        else
            return ifFound(cartItem)
    }

    total() {
        return this._contents.reduce((total, cartItem) => total + cartItem.total(), 0)
    }

    removeProduct(product) {
        this.withCartItemOfProductDo(
            product,
            cartItem => this.decrementCartItemQuantity(cartItem),
            () => { throw new Error(PRODUCT_NOT_IN_CART) }
        )
    }

    decrementCartItemQuantity(cartItem) {
        cartItem.decrementQuantity();
        if(cartItem.hasNoQuantity()) {
            this._contents.splice(this._contents.indexOf(cartItem),1)
        }
    }
}

