describe("Store", () => {


  beforeEach(() => {
    store = new Store
  })

  it("Shows all the products in the shop", () => {
    expect(store.allOfproducts.length).toEqual(13)
  })

  it("Can find the name of a particular product", () => {
    expect(store.allOfproducts[7].name).toEqual("Fine Stripe Short Sleeve Shirt, Grey")
  })

  it("Can find the price of a particular product in the store", () => {
    expect(store.allOfproducts[9].price).toEqual(75.00)
  })


	it('Can add a products to the basket', () => {
  	store.addBasket(store.allOfproducts[0])
    store.addBasket(store.allOfproducts[1])
  	expect(store.shoppingCart.totalPrice()).toEqual(141.00)
  	})

  it('Adding product to the basket decreases its quantity', () => {
    store.addBasket(store.allOfproducts[0])
    expect(store.allOfproducts[0].quantity).toEqual(4)
  })

  it('Unable to put out of stock products in the basket', () => {
  store.addBasket(store.allOfproducts[4])
  expect(store.shoppingCart.totalPrice()).toEqual(0)
  expect(store.allOfproducts[4].quantity).toEqual(0)
  })

  it("Removing product from  the basket increases its quantity", () => {
  store.addBasket(store.allOfproducts[0])
  store.addBasket(store.allOfproducts[0])
  store.removeBasket(store.allOfproducts[0].name)
  expect(store.allOfproducts[0].quantity).toEqual(4)
  })


})
