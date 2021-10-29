import {createiPad} from "./TestObejectsFactory";

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

    quantityOf(product) {
        return 1;
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
