class CartItem {
    constructor(product) {

    }

    isFor(product) {
        return undefined;
    }
}

test('Los cart items se crean con un producto', () => {

    const product = 'a product';
    const cartItem = new CartItem(product);
    expect(cartItem.isFor(product)).toBeTruthy()
    expect(cartItem.isFor('another product')).toBeFalsy()
})

