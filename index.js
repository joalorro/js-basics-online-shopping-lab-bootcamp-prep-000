var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var newItem = {itemName: item, itemPrice: price}
  cart.push(newItem)
  return `${newItem['itemName']} has been added to your cart.`
  
}

function viewCart() {
  var msg = "In your cart, you have"
  var currentItem
  if (cart.length === 0 ){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1){
    currentItem = cart[0]
    return `${msg} ${currentItem['itemName']} at $${currentItem["itemPrice"]}.`
    
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