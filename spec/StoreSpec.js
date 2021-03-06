describe("Store", () => {

  beforeEach(() => {
    store = new Store
  })

  describe("Finding products in the store:", () => {

    it("Shows all the products in the store", () => {
      expect(store.allOfproducts.length).toEqual(13)
    })

    it("Can find the name of a particular product in the store", () => {
      expect(store.allOfproducts[7].name).toEqual("Fine Stripe Short Sleeve Shirt, Grey")
    })

    it("Can find the price of a particular product in the store", () => {
      expect(store.allOfproducts[9].price).toEqual(75.00)
    })

  })


  describe("Adding and removing products from cart:", () => {

	  it('Can add a product to the cart', () => {
  	  store.addCart(store.allOfproducts[0])
      store.addCart(store.allOfproducts[1])
  	  expect(store.shoppingCart.totalPrice()).toEqual(141.00)
  	})

    it('Adding product to the cart decreases its quantity', () => {
      store.addCart(store.allOfproducts[0])
      expect(store.allOfproducts[0].quantity).toEqual(4)
    })

    it("Removing product from the cart increases its quantity", () => {
      store.addCart(store.allOfproducts[0])
      store.addCart(store.allOfproducts[0])
      store.removeCart(store.allOfproducts[0].name)
      expect(store.allOfproducts[0].quantity).toEqual(4)
    })

  })

    describe("Out of stock:", () => {

      it('Unable to put out of stock products in the cart', () => {
        store.addCart(store.allOfproducts[4])
         expect(store.shoppingCart.totalPrice()).toEqual(0)
        expect(store.allOfproducts[4].quantity).toEqual(0)
      })

    })

})
