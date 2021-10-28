class CartItem {
    constructor(product) {
        this._product = product;
    }

    isFor(product) {
        return this._product === product;
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
