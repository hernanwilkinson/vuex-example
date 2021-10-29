import {createiPad, createTShirt, removeInventaryOf} from "./TestObejectsFactory";

class Supermarket {

    constructor(products) {
        this._products = products

    }

    availableProducts() {
        return this._products
    }
}

test('availableProducts devuelve los productos con stock', () => {
    const tShirt = createTShirt()
    const iPad = createiPad()
    const supermarket = new Supermarket([tShirt,iPad])

    expect(supermarket.availableProducts()).toStrictEqual([tShirt,iPad])
})

test('availableProducts no devuelve los productos sin stock', () => {
    const tShirt = createTShirt()
    const iPad = createiPad()
    const supermarket = new Supermarket([tShirt,iPad])
    removeInventaryOf(iPad)

    expect(supermarket.availableProducts()).toStrictEqual([tShirt])
})
