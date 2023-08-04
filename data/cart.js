export const cart=[
  {
    productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
  },
  {
    productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:4
  }
]

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

 