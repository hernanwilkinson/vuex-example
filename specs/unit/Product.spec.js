class Product {
    constructor(id, title, price, inventory) {

    }

    hasStock(){
        return undefined
    }

}

function iPad() {
    return new Product( 1, "iPad 4 Mini", 500.01, 2 )
}

test('Product hasStock cuando inventory > 0', () => {
    expect(iPad().hasStock()).toBeTruthy()
})

