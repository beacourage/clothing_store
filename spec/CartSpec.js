describe("Shopping Cart", () => {

  beforeEach(() => {
  		shoppingCart = new Cart
      product1 = new IndividualProduct("Almond Toe Court Shoes, Patent Black","Women’s Footwear","£99.00","5")
      product2 = new IndividualProduct("Flip Flops, Red","Men’s Footwear","£19.00","6")
  	})

  describe("Initially:", () => {

    it("The shopping cart is initially empty", () => {
      expect(shoppingCart.products.length).toEqual(0)
    })

  })


  describe("Adding and removing products:", () => {

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

  describe("Total Price:", () => {

    it("Can view the total price of products in shopping cart", () => {
      shoppingCart.addProduct(product1)
      shoppingCart.addProduct(product2)
      expect(shoppingCart.totalPrice()).toEqual(118)
    })

  })

})
