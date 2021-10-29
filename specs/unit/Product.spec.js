class Product {
    constructor(id, title, price, inventory) {

    }

    hasStock(){
        return true
    }

    decrementInventory() {

    }
}

function iPad() {
    return new Product( 1, "iPad 4 Mini", 500.01, 2 )
}

test('Product hasStock cuando inventory > 0', () => {
    expect(iPad().hasStock()).toBeTruthy()
})

test('Product no tiene stock cuando inventory <=0', () => {
    let product = iPad();
    product.decrementInventory()
    product.decrementInventory()
    expect(product.hasStock()).toBeFalsy()
})
