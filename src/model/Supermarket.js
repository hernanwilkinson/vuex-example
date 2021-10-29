export const INVALID_PRODUCT = "Invalid product";

export class Supermarket {

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
        this.assertIsValidProduct(product)

        product.decrementInventory()
    }

    assertIsValidProduct(product) {
        if (this._products.indexOf(product) < 0) throw new Error(INVALID_PRODUCT)
    }

    products() {
        return this._products
    }

    incrementInventoryOf(product) {
        this.assertIsValidProduct(product)

        product.incrementInventory()
    }
}
