var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random * 100
  var newItem = {itemName: item, itemPrice: price}
  cart.push(newItem)
}

function viewCart() {
  var msg = "In your cart, you have "
  if (cart.length === 0 ){
    return 'Your shopping cart is empty.'
  }
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}