export class CartItem {
    constructor(product) {
        this._product = product;
        this._quantity = 1
    }

    isFor(product) {
        return this._product === product;
    }

    quantity() {
        return this._quantity
    }

    incrementQuantity() {
        this._quantity++
    }

    total() {
        return undefined;
    }
}
