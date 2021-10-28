class CartItem {
    constructor(product) {
        this._product = product;
        this._quantity = 1
    }

    isFor(product) {
        return this._product === product;
    }

    quantity(){
        return this._quantity
    }

    incrementQuantity() {
        this._quantity++
    }
}

test('Los cart items se crean con un producto', () => {
    const product = 'a product';
    const cartItem = new CartItem(product);
    expect(cartItem.isFor(product)).toBeTruthy()
    expect(cartItem.isFor('another product')).toBeFalsy()
})

test('Los cart items se crean con cantidad 1', () => {
    const product = 'a product';
    const cartItem = new CartItem(product);
    expect(cartItem.quantity()).toEqual(1)
})

test('Se puede incrementar la cantidad de un cart item', () => {
    const product = 'a product';
    const cartItem = new CartItem(product);
    cartItem.incrementQuantity()
    expect(cartItem.quantity()).toEqual(2)
})
