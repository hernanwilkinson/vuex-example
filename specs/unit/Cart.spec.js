import {createiPad, createTShirt} from "./TestObejectsFactory";

class Cart {
    constructor() {
        this._contents = []
    }

    isEmpty() {
        return this._contents.length === 0;
    }

    addProduct(product) {
        this._contents.push(product)
    }

    quantityOf(productToCount) {
        return this._contents.filter(product => product === productToCount).length;
    }

    contents() {
        return this._contents
    }
}

test('Carrito se crea vacio', () => {
    expect(new Cart().isEmpty()).toBeTruthy()
})

test('Carrito deja de estar vacio cuando se agrega un producto', () => {
    const iPad = createiPad()
    const cart = new Cart();
    cart.addProduct(iPad)
    expect(cart.isEmpty()).toBeFalsy()
})

test('Cuando se agrega un producto nuevo, la cantidad es 1', () => {
    const iPad = createiPad()
    const cart = new Cart();
    cart.addProduct(iPad)
    expect(cart.quantityOf(iPad)).toEqual(1)
})

test('La cantidad de un producto no agregado es 0', () => {
    const iPad = createiPad()
    const cart = new Cart();
    expect(cart.quantityOf(iPad)).toEqual(0)
})

test('La cantidad de un producto se incrementa cada vez que se agrega', () => {
    const iPad = createiPad()
    const tShirt = createTShirt()
    const cart = new Cart();

    cart.addProduct(iPad)
    cart.addProduct(iPad)
    cart.addProduct(tShirt)

    expect(cart.quantityOf(iPad)).toEqual(2)
    expect(cart.quantityOf(tShirt)).toEqual(1)

})


test('Los cart items son uno si se agrega el mismo producto mas de una vez', () => {
    const iPad = createiPad()
    const cart = new Cart();

    cart.addProduct(iPad)
    cart.addProduct(iPad)

    expect(cart.contents().length).toEqual(1)
    expect(cart.contents()[0].quantity()).toEqual(2)

})
