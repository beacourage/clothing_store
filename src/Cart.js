class Cart {
  constructor(){
    this.products = []
  }

  addProduct(product) {
    this.products.push(product)
  }

  removeProduct(product) {
    var position = this.products.lastIndexOf(product)
   	this.products.splice(position,1)
  }

  totalPrice(product) {

  // want the total price of products in my cart

  }


}
