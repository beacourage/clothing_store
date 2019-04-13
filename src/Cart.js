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

  totalPrice() {
    return this.products.reduce((acc, product) => {
      return acc + product.price
    }, 0)
    }

  itemCount() {
    return this.products.length
  }


}
