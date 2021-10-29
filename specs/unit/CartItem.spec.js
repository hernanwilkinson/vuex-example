import {CartItem} from "../../src/model/CartItem"
import {createiPad, createTShirt} from "./TestObejectsFactory"


test('Los cart items se crean con un producto', () => {
    const product = createiPad()
    const cartItem = new CartItem(product)
    expect(cartItem.isFor(product)).toBeTruthy()
    expect(cartItem.isFor(createTShirt())).toBeFalsy()
})

test('Los cart items se crean con cantidad 1', () => {
    const product = createiPad()
    const cartItem = new CartItem(product)
    expect(cartItem.quantity()).toEqual(1)
})

test('Se puede incrementar la cantidad de un cart item', () => {
    const product = createiPad()
    const cartItem = new CartItem(product)
    cartItem.incrementQuantity()
    expect(cartItem.quantity()).toEqual(2)
})

test('Un cart item sabe calcular el total', () => {
    const product = createiPad()
    const cartItem = new CartItem(product)
    cartItem.incrementQuantity()
    expect(cartItem.total()).toEqual(product.price() * cartItem.quantity())
})

test('Un cart item devuelve el title del producto', () => {
    const product = createiPad()
    const cartItem = new CartItem(product);
    expect(cartItem.productTitle()).toEqual(product.title())
})

test('Un cart item devuelve el precio del producto', () => {
    const product = createiPad()
    const cartItem = new CartItem(product);
    expect(cartItem.productPrice()).toEqual(product.price())
})

test('Un cart item tiene mismo id que el producto', () => {
    const product = createiPad()
    const cartItem = new CartItem(product);
    expect(cartItem.id).toEqual(product.id)
})
