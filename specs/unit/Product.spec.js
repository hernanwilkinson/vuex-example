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

function createiPad() {
    return new Product( 1, "createiPad 4 Mini", 500.01, 2 )
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
