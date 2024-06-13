import { Injectable } from '@angular/core';
import { CartItem, ShoppingCartItems } from './cart-item';
import { StoreProduct } from './store-product';

// the local storage key
const lsk = 'cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartItems: ShoppingCartItems = {};
  public cartItemCount: number = 0;

  constructor() {
    const localStorageString = localStorage.getItem(lsk);
    if(localStorageString != null) {
      var ls = JSON.parse(localStorageString) as ShoppingCartItems | undefined;

      if(ls) {
        this.cartItems = ls;
      }
    }
    this.updateCartCount();
  }

  public addItem(newItem: StoreProduct) {
    let existingItem = this.cartItems[newItem.id];
    if(existingItem) {
      // if there is already an item of this type in the cart, then we will increment its count by one.
      existingItem.quantity++;
      console.info('incremented existing item count');
    } else {
      this.cartItems[newItem.id] = {
        quantity: 1,
        product: newItem,
      };
      console.info('added new item');
    }

    // commit to local storage
    this.storeLocal();

    this.updateCartCount();
  }

  // updates the item count of our cart
  public updateCartCount() {
    let count = 0;
    for(const key in this.cartItems) {
      // add the item count of each cart item to our total
      count+= this.cartItems[key].quantity;
    }
    this.cartItemCount = count;
  }

  // sets the local storage with our current cart state
  public storeLocal() {
    try { localStorage.setItem(lsk, JSON.stringify(this.cartItems)) } catch (err) {
      console.error('encountered error setting local storage: ', err);
    }
  }
}
