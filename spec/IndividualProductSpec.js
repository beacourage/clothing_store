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


})
