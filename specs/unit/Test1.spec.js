import {CartItem} from "../../src/model/CartItem";

function iPad() {
    return {id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2}
}

let tShirt = function () {
    return {id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10}
}

test('Los cart items se crean con un producto', () => {
    const product = iPad();
    const cartItem = new CartItem(product);
    expect(cartItem.isFor(product)).toBeTruthy()
    expect(cartItem.isFor(tShirt())).toBeFalsy()
})

test('Los cart items se crean con cantidad 1', () => {
    const product = iPad();
    const cartItem = new CartItem(product);
    expect(cartItem.quantity()).toEqual(1)
})

test('Se puede incrementar la cantidad de un cart item', () => {
    const product = iPad();
    const cartItem = new CartItem(product);
    cartItem.incrementQuantity()
    expect(cartItem.quantity()).toEqual(2)
})

test('Un cart item sabe calcular el total', () => {
    const product = iPad();
    const cartItem = new CartItem(product);
    cartItem.incrementQuantity()
    expect(cartItem.total()).toEqual(product.price * cartItem.quantity())
})

test('Un cart item devuelve el title del producto', () => {
    const product = iPad();
    const cartItem = new CartItem(product);
    expect(cartItem.productTitle()).toEqual(product.title)
})
