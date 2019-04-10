describe("Individual Product", () => {

  beforeEach(() => {
    product = new IndividualProduct("Almond Toe Court Shoes, Patent Black","Women’s Footwear","£99.00","5")
  })

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

  it("Can tell whether a product is out of stock", () => {
    expect(product.outOfStock()).toBe(false)
  })




})
