class Product {
    constructor(id, title, price, inventory) {
        this._inventory = inventory;

    }

    hasStock(){
        return this._inventory > 0
    }

    decrementInventory() {
        this._inventory--
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

