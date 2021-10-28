class CartItem {
    constructor(product) {

    }

    isFor(product) {
        return undefined;
    }
}

test('Los cart items se crean con un producto', () => {

    const product = 'a product';
    expect(new CartItem(product).isFor(product)).toBeTruthy()

})
