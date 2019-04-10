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

  it("Can remove a product from the shopping cart", () => {
    shoppingCart.addProduct("Skirt")
    shoppingCart.removeProduct("Skirt")
    expect(shoppingCart.products.length).toEqual(0)
  })

  it("The products array has the specific product removed", () => {
    shoppingCart.products = ["Top","Skirt","Trousers", "Shoes"]
    shoppingCart.removeProduct("Trousers")
    expect(shoppingCart.products).toEqual(["Top","Skirt","Shoes"])
  })

})
