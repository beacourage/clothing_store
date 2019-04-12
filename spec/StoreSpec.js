describe("Store", () => {


  beforeEach(() => {
    store = new Store
  })

  it("Shows all the products in the shop", () => {
    expect(store.products.length).toEqual(13)
  })


})
