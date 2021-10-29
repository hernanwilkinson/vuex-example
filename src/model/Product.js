export const CANNOT_DECREMENT_INVENTORY = "Cannot decrement inventory when there is no stock";

export class Product {

    constructor(id, title, price, inventory) {
        this.id = id;
        this._title = title;
        this._price = price;
        this._inventory = inventory;

    }

    hasStock() {
        return this._inventory > 0
    }

    decrementInventory() {
        this.assertHasStock()

        this._inventory--
    }

    incrementInventory() {
        this._inventory++
    }

    assertHasStock() {
        if (!this.hasStock()) throw new Error(CANNOT_DECREMENT_INVENTORY)
    }

    inventory() {
        return this._inventory;
    }

    title() {
        return this._title
    }

    price() {
        return this._price
    }
}
