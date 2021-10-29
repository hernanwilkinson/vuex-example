import {Product} from "../../src/model/Product"

export const ipad_id = 1
export const ipad_title = 'iPad 4 Mini'
export const ipad_price = 500.01
export const initial_ipad_inventory = 2

export function createiPad() {
    return new Product(ipad_id, ipad_title, ipad_price, initial_ipad_inventory)
}

export function createTShirt() {
    return new Product(2, 'H&M T-Shirt White', 10.99, 10)
}

export function removeInventaryOf(iPad) {
    for (let i = initial_ipad_inventory; i > 0; i--)
        iPad.decrementInventory()
}
