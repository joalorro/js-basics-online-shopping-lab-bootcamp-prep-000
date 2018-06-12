var cart = [{itemName:"bananas", itemPrice:17 }, { itemName:"pancake batter", itemPrice: 5 }];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  var msg = "In your cart, you have "
  if (cart.length === 0){
    
        return "Your shopping cart is empty."
        
      } else if (cart.length ===1){
        
        msg = `${msg} ${cart[0][itemName] } priced at $${cart[0][itemPrice]}.`
        console.log(msg)
        return msg
        
      } else if (cart.length === 2) {
        
        for (let i = 0; i < cart.length; i++) {
          msg
      
        }      
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

