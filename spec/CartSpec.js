describe("Cart", () => {

  beforeEach(() => {
  		shoppingCart = new Cart
  	})

  it("The shopping cart is initially empty", () => {
    expect(shoppingCart.products.length).toEqual(0)
  })

  it("Can add a product to the shopping cart", () => {
    shoppingCart.addProduct("Top")
    expect(shoppingCart.products.length).toEqual(1)
  })

  it("The products array has the specific added product", () => {
    shoppingCart.addProduct("Skirt")
    expect(shoppingCart.products[0]).toEqual("Skirt")
  })

})
