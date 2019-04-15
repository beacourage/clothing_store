describe("Individual Product", () => {

  beforeEach(() => {
    product = new IndividualProduct("Almond Toe Court Shoes, Patent Black","Women’s Footwear","£99.00","5")
  })

  describe("Initially:", () => {

    it("Initialized product has the correct name", () => {
      expect(product.name).toEqual("Almond Toe Court Shoes, Patent Black")
    })

    it("Initialized product has the correct category", () => {
      expect(product.category).toEqual("Women’s Footwear")
    })

    it("Initialized product has the correct price", () => {
      expect(product.price).toEqual(99)
    })

    it("Initialized product has the correct quantity", () => {
      expect(product.quantity).toEqual(5)
    })

  })

  describe("In or out of stock:", () => {

    it("Can tell whether a product is out of stock", () => {
      expect(product.outOfStock()).toBe(false)
    })

    it("Can tell whether a product is in stock", () => {
       expect(product.inStock()).toBe(true)
    })

  })

})
