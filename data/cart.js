export const cart= JSON.parse(localStorage.getItem('cart')) ||[
  {
    productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
  },
  {
    productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:4
  }
]

function addToLocalStorage(){

  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productID){
    let matchingItem;
    cart.forEach(item => {
  
      if (productID === item.productID) {
        matchingItem = item;
      }
  
    });
  
    if (matchingItem) {
  
      matchingItem.quantity += Number(document.querySelector(`.select-js-${productID}`).value);
      
    }
    else {
  
      let item = {
        productID,
        quantity: Number(document.querySelector(`.select-js-${productID}`).value)
      }
      cart.push(item);
      
    }
    addToLocalStorage();
    
  }

 
  export function removeFromCart(productId){
    let deleteItem=cart.findIndex(cartItem=>{
        return cartItem.productID===productId;
    });
    cart.splice(deleteItem,1);
    addToLocalStorage();
 
}