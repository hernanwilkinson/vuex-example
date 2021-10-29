class Product {
    static CANNOT_DECREMENT_INVENTORY = "Cannot decrement inventory when there is no stock";
    constructor(id, title, price, inventory) {
        this._inventory = inventory;

    }

    hasStock(){
        return this._inventory > 0
    }

    decrementInventory() {
        this.assertHasStock()

        this._inventory--
    }

    assertHasStock() {
        if (!this.hasStock()) throw new Error(Product.CANNOT_DECREMENT_INVENTORY)
    }

    inventory() {
        return this._inventory;
    }
}

const ipad_id = 1;
const ipad_title = 'iPad 4 Mini';
const ipad_price = 500.01;
const initial_ipad_inventory = 2;

function createiPad() {
    return new Product( ipad_id, ipad_title, ipad_price, initial_ipad_inventory )
}

test('Product hasStock cuando inventory > 0', () => {
    expect(createiPad().hasStock()).toBeTruthy()
})

test('Product no tiene stock cuando inventory <=0', () => {
    let iPad = createiPad();
    iPad.decrementInventory()
    iPad.decrementInventory()
    expect(iPad.hasStock()).toBeFalsy()
})

test('No se puede decrementar inventario cuando no tiene stock', () => {
    let iPad = createiPad();
    iPad.decrementInventory()
    iPad.decrementInventory()
    expect(()=>iPad.decrementInventory()).toThrowError(new Error(Product.CANNOT_DECREMENT_INVENTORY))
    expect(iPad.inventory()).toEqual(0)
})

test('Se puede acceder a id, title, price e inventario', () => {
    let iPad = createiPad();

    expect(iPad.id).toEqual(ipad_id)
    expect(iPad.title()).toEqual(ipad_title)
    expect(iPad.price()).toEqual(ipad_price)
    expect(iPad.inventory()).toEqual(initial_ipad_inventory)
})
