export const cart=[];

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
      console.log(item.quantity)
      cart.push(item);
    }
  
  }

 