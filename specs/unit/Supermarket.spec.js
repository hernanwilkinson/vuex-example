import {createiPad, createTShirt, initial_ipad_inventory, removeInventaryOf} from "./TestObejectsFactory";
import {INVALID_PRODUCT, Supermarket} from "../../src/model/Supermarket"

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

test('se puede acceder a todos los productos del supermercado', () => {
    const tShirt = createTShirt()
    const iPad = createiPad()
    const supermarket = new Supermarket([tShirt,iPad])

    expect(supermarket.products()).toStrictEqual([tShirt,iPad])
})

test('se puede puede incrementar el stock de un producto del supermercado', () => {
    const tShirt = createTShirt()
    const iPad = createiPad()
    const supermarket = new Supermarket([tShirt,iPad])

    supermarket.incrementInventoryOf(iPad)

    expect(iPad.inventory()).toEqual(initial_ipad_inventory + 1)
})

test('no se puede puede incrementar stock de un producto que no está en el supermercado', () => {
    const tShirt = createTShirt()
    const iPad = createiPad()
    const supermarket = new Supermarket([tShirt])

    expect(()=> supermarket.incrementInventoryOf(iPad)).toThrowError( new Error(INVALID_PRODUCT))
})
