var cart = [{itemName: "banana", itemPrice: 55}, {itemName: "yams", itemPrice: 56}, {itemName: 'pickles', itemPrice: 77}]

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
  var currentItem = cart[0]
  
  if (cart.length === 0 ){
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1){
    return `${msg} ${currentItem['itemName']} at $${currentItem["itemPrice"]}.`
  } else if (cart.length === 2){
    return `${msg} ${cart[0]['itemName']} at $${cart[0]["itemPrice"]}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
  } else {
    
    for (let i = 0; i < cart.length; i++){
      currentItem = cart[i]
      
      if (i < cart.length - 1){
        msg = `${msg} ${currentItem.itemName} at $${currentItem.itemPrice},`
      } else {
        msg = `${msg} and ${currentItem.itemName} at $${currentItem.itemPrice}.`
      }
      
      
    }
   return msg 
  }
  
}

function total() {
  
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    
    sum += cart[i].itemPrice
    
  }
  return sum
}

function removeFromCart(item) {

  var found = false;
  for (let i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      found = true
      console.log(item + " was removed")
    }
    
  }
  
  if (found === true){
      return cart
    } else {
      msg = 'That item is not in your cart'
      console.log(msg)
      return msg
    }

}

function placeOrder(cardNumber) {
  // write your code here
}

console.log(cart)
removeFromCart("yams")
console.log(cart)
removeFromCart("weins")
removeFromCart("pickles")
console.log(cart)