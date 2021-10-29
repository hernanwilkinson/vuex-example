import {CANNOT_DECREMENT_INVENTORY} from "../../src/model/Product"
import {
    createiPad,
    initial_ipad_inventory,
    ipad_id,
    ipad_price,
    ipad_title,
    removeInventaryOf
} from "./TestObejectsFactory"

test('Product hasStock cuando inventory > 0', () => {
    expect(createiPad().hasStock()).toBeTruthy()
})

test('Product no tiene stock cuando inventory <=0', () => {
    let iPad = createiPad()
    removeInventaryOf(iPad)

    expect(iPad.hasStock()).toBeFalsy()
})

test('No se puede decrementar inventario cuando no tiene stock', () => {
    let iPad = createiPad()
    removeInventaryOf(iPad)

    expect(()=>iPad.decrementInventory()).toThrowError(new Error(CANNOT_DECREMENT_INVENTORY))
    expect(iPad.inventory()).toEqual(0)
})

test('Se puede acceder a id, title, price e inventario', () => {
    let iPad = createiPad()

    expect(iPad.id).toEqual(ipad_id)
    expect(iPad.title()).toEqual(ipad_title)
    expect(iPad.price()).toEqual(ipad_price)
    expect(iPad.inventory()).toEqual(initial_ipad_inventory)
})
