class Store{
  constructor(){
    this.shoppingCart = new Cart
    this.allOfproducts = this.allProducts()
  }

  allProducts() {
    var array = []
    var productArray = ["Almond Toe Court Shoes, Patent Black + Women’s Footwear + £99.00 + 5",
                      "Suede Shoes, Blue + Women’s Footwear + £42.00 + 4",
    									"Leather Driver Saddle Loafers, Tan + Men’s Footwear + £34.00 + 12",
    									"Flip Flops, Red + Men’s Footwear + £19.00 + 6",
    									"Flip Flops, Blue + Men’s Footwear + £19.00 + 0",
    									"Gold Button Cardigan, Black + Women’s Casualwear + £167.00 + 6",
    									"Cotton Shorts, Medium Red + Women’s Casualwear + £30.00 + 5",
    									"Fine Stripe Short Sleeve Shirt, Grey + Men’s Casualwear + £49.99 + 9",
    								  "Fine Stripe Short Sleeve Shirt, Green + Men’s Casualwear + £39.99 + 3",
    									"Sharkskin Waistcoat, Charcoal + Men’s Formalwear + £75.00 + 2",
    									"Lightweight Patch Pocket Blazer, Deer + Men’s Formalwear + £175.50 + 1",
    									"Bird Print Dress, Black + Women’s Formalwear + £270.00 + 10",
    									 "Mid Twist Cut-Out Dress, Pink + Women’s Formalwear + £540.00 + 5"]


   productArray.forEach((product) => {
     product = product.split(" + ");
     array.push(new IndividualProduct(product[0], product[1], product[2],product[3]))
   })
    return array
  }

  findIndex(productname){
    var results;
    this.allOfproducts.forEach((product, index) => {
      if(product.name === productname) {
        results = index
        return false;
      }
    })
    return results
  }

  addBasket(product) {
    var position = this.findIndex(product.name)
    if (this.allOfproducts[position].removeProduct()) {
      this.shoppingCart.addProduct(product)
    }
  }



}
