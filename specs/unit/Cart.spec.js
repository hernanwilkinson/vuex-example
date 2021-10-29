class Cart {
    isEmpty() {
        return undefined;
    }
}

test('Carrito se crea vacio', () => {
    expect(new Cart().isEmpty()).toBeTruthy()
})
