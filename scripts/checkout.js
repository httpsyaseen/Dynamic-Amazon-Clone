import{cart, removeFromCart} from '../data/cart.js';
import{products} from '../data/products.js';

let cartHTML=``;


    cart.forEach(cartItem=>{
        let productId=cartItem.productID;
        let matchingItem;
    
        products.forEach(product=>{
            if(productId==product.id){
                matchingItem=product;
            }
        });
    
         cartHTML+=` <div class="cart-item-container  remove-from-cart-js-${matchingItem.id}">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>
    
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingItem.image}">
    
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingItem.name}
            </div>
            <div class="product-price">
              $${cartItem.quantity*(matchingItem.priceCents/100).toFixed()}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary delete-js"
              data-product-id=${matchingItem.id}>
                Delete
              </span>
            </div>
          </div>
    
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked
                class="delivery-option-input"
                name="${matchingItem.id}">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="${matchingItem.id}">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio"
                class="delivery-option-input"
                name="${matchingItem.id}">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    })

document.querySelector('.order-summary-js').innerHTML=cartHTML;
document.querySelector('.return-to-home-link').innerHTML=cart.length
document.querySelectorAll('.delete-js').
forEach(button=>{
    button.addEventListener('click',()=>{
        let productId=button.dataset.productId;
        removeFromCart(productId);    
         document.querySelector(`.remove-from-cart-js-${productId}`).remove();
         document.querySelector('.return-to-home-link').innerHTML=cart.length
    
    })
})
