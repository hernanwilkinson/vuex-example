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
