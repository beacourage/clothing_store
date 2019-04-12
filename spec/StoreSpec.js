describe("Store", () => {


  beforeEach(() => {
    store = new Store
  })

  it("Shows all the products in the shop", () => {
    expect(store.products.length).toEqual(13)
  })

  it("Can find the name of a particular product", () => {
    expect(store.products[7].name).toEqual("Fine Stripe Short Sleeve Shirt, Grey")
  })

  it("Can find the price of a particular product in the store", () => {
    expect(store.products[9].price).toEqual(75.00)
  })





})
