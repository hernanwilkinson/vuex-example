import {createiPad, createTShirt, initial_ipad_inventory, removeInventaryOf} from "./TestObejectsFactory";

const INVALID_PRODUCT = "Invalid product";

class Supermarket {

    constructor(products) {
        this._products = products

    }

    availableProducts() {
        return this._products.filter(product => product.hasStock())
    }

    // El inventario no debería ser parte del producto. Esto lo hace mutable
    // y además se lo puede modificar sin el conocimiento del supermercado
    // lo cual no es pensar de manera sistémica
    decrementInventoryOf(product) {
        product.decrementInventory()
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
    removeInventaryOf(iPad)
    const supermarket = new Supermarket([tShirt,iPad])

    expect(supermarket.availableProducts()).toStrictEqual([tShirt])
})

test('se puede decrementar stock de producto del supermercado', () => {
    const iPad = createiPad()
    const supermarket = new Supermarket([iPad])

    supermarket.decrementInventoryOf(iPad)
    expect(iPad.inventory()).toEqual(initial_ipad_inventory-1)
})

test('no se puede decrementar stock de producto que no esta en el supermercado', () => {
    const iPad = createiPad()
    const supermarket = new Supermarket([])

    expect(()=>supermarket.decrementInventoryOf(iPad)).toThrowError(new Error (INVALID_PRODUCT))
})
