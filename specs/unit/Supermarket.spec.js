import {createiPad, createTShirt} from "./TestObejectsFactory";

class Supermarket {
    constructor(products) {

    }

    availableProducts() {
        return undefined;
    }
}

test('availableProducts devuelve los productos con stock', () => {
    const tShirt = createTShirt();
    const iPad = createiPad();
    const supermarket = new Supermarket([tShirt,iPad])

    expect(supermarket.availableProducts()).toBe([tShirt,iPad])
})
