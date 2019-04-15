$(document).ready(function() {

	var store = new Store
	refresh(store);
}|

	$('#inventory-list').on('click', 'a.add-to-basket', function() {
		var position = $(this).data('pick');

		store.addCart(store.allOfproducts[position]);
		refresh(store);
	});

	$('#basket-list').on('click', 'a.remove-from-basket', function() {
		var index = $(this).data('pick');

		store.removeCart(store.shoppingCart.products[index].name);
		refresh(store);
	});
});

function refresh(store) {
	updateList(store.allOfproducts)
	updateCart(store.shoppingCart)
};


function updateList(products) {
	$('#inventory-list').empty();

	products.forEach(function(product, index) {
		var item = createProduct(product);

		if(product.inStock()) {
			item += ("<div><a href='#' class='add-to-basket' data-pick='" + index + "'>Add to Cart</a></div>");
		} else {
			item += '<div>Out of stock</div>';
		};

		$(item).appendTo($('#inventory-list')).addClass('product-box col-xs-12 col-sm-6 col-md-4 panel panel-default');
	});
};

function createProduct(product) {
	return '<li><div class="product-name">' + product.name + '</div>' +
	'<div>Price: £<span class="product-price">' + product.price + '</span>, ' +
	'Stock: <span class="product-quantity">' + product.quantity + '</span></div>' +
	'<div>Category: <span class="product-category">' + product.category + '</span></div>';
};

function updateCart(basket) {
	$('#basket-list').empty();
	$('#basket-count').text(basket.itemCount());
	$('#basket-value').text(basket.totalPrice());

	if (basket.itemCount() > 0) {
		basket.products.forEach(function(item, index) {
			var item = '<li>' + item.name + ', £' + item.price + ' (<a href="#" class="remove-from-basket" data-pick="' + index + '">Remove</a>)</li>';
			$(item).appendTo($('#basket-list'));
		});
	} else {
		var item = '<li>Empty</li>';
		$(item).appendTo($('#basket-list'));
	};
};
