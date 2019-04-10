describe("Cart", () => {

  beforeEach(() => {
  		shoppingCart = new Cart
  	})

  it("The shopping cart is initially empty", () => {
    expect(shoppingCart.products.length).toEqual(0)
  })

})
