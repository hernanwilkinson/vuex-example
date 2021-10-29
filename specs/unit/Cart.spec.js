class Cart {
    isEmpty() {
        return true;
    }
}

test('Carrito se crea vacio', () => {
    expect(new Cart().isEmpty()).toBeTruthy()
})
