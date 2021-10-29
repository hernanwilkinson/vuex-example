import {createiPad, createTShirt} from "./TestObejectsFactory"
import {Cart, PRODUCT_NOT_IN_CART} from "../../src/model/Cart"

test('Carrito se crea vacio', () => {
    expect(new Cart().isEmpty()).toBeTruthy()
})

test('Carrito deja de estar vacio cuando se agrega un producto', () => {
    const iPad = createiPad()
    const cart = new Cart()
    cart.addProduct(iPad)
    expect(cart.isEmpty()).toBeFalsy()
})

test('Cuando se agrega un producto nuevo, la cantidad es 1', () => {
    const iPad = createiPad()
    const cart = new Cart()
    cart.addProduct(iPad)
    expect(cart.quantityOf(iPad)).toEqual(1)
})

test('La cantidad de un producto no agregado es 0', () => {
    const iPad = createiPad()
    const cart = new Cart()
    expect(cart.quantityOf(iPad)).toEqual(0)
})

test('La cantidad de un producto se incrementa cada vez que se agrega', () => {
    const iPad = createiPad()
    const tShirt = createTShirt()
    const cart = new Cart()

    cart.addProduct(iPad)
    cart.addProduct(iPad)
    cart.addProduct(tShirt)

    expect(cart.quantityOf(iPad)).toEqual(2)
    expect(cart.quantityOf(tShirt)).toEqual(1)

})

test('Los cart items son uno si se agrega el mismo producto mas de una vez', () => {
    const iPad = createiPad()
    const cart = new Cart()

    cart.addProduct(iPad)
    cart.addProduct(iPad)

    expect(cart.contents().length).toEqual(1)
    expect(cart.contents()[0].quantity()).toEqual(2)

})

test('Total del carrito es la suma del total de los items', () => {
    const iPad = createiPad()
    const tShirt = createTShirt()
    const cart = new Cart()

    cart.addProduct(iPad)
    cart.addProduct(iPad)
    cart.addProduct(tShirt)

    expect(cart.total()).toEqual(iPad.price()*2 + tShirt.price())

})

test('Se puede sacar un producto agregado al carrito', () => {
    const iPad = createiPad()
    const cart = new Cart()

    cart.addProduct(iPad)
    cart.removeProduct(iPad)

    expect(cart.quantityOf(iPad)).toEqual(0)

})

test('Cuando la cantidad llega a cero se remueve el cart item', () => {
    const iPad = createiPad()
    const cart = new Cart()

    cart.addProduct(iPad)
    cart.removeProduct(iPad)

    expect(cart.contents().length).toEqual(0)

})

test('Luego de sacar un producto, se mantiene el cart item si la cantidad es mayor a cero', () => {
    const iPad = createiPad()
    const cart = new Cart()

    cart.addProduct(iPad)
    cart.addProduct(iPad)
    cart.removeProduct(iPad)

    expect(cart.contents().length).toEqual(1)
    expect(cart.contents()[0].isFor(iPad)).toBeTruthy()

})

test('No se puede sacar un producto que no está en el carrito', () => {
    const iPad = createiPad()
    const cart = new Cart()

    expect(() => cart.removeProduct(iPad)).toThrowError(new Error(PRODUCT_NOT_IN_CART))
})
