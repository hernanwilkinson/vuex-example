import {CartItem} from "../../src/model/CartItem";

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

test('Un cart item sabe calcular el total', () => {
    const product = { price: 10 };
    const cartItem = new CartItem(product);
    cartItem.incrementQuantity()
    expect(cartItem.total()).toEqual(product.price * cartItem.quantity())
})
