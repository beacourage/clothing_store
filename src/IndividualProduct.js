class IndividualProduct {
  constructor(productName, category, price, quantityInStock) {
    this.name = productName
    this.category = category
    this.price = parseInt(price.slice(1,7))
    this.quantity = parseInt(quantityInStock)
  }

  outOfStock(){
    return (this.quantity == 0)
  }

  inStock(){
    return ( this.quantity > 0)
  }



}
