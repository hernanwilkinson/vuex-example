import {createiPad} from "./TestObejectsFactory";

class Cart {
    isEmpty() {
        return true;
    }

    addProduct(product) {

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
