import { Injectable } from '@angular/core';
import Utils from './utils';

import { ShoppingCartItems } from './cart-item';
import { StoreProduct } from './store-product';

// the local storage key
const lsk = 'cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartItems: ShoppingCartItems = {};
  public cartItemCount: number = 0;
  public cartPrice: number = 0;
  public cartPriceFormatted: string = "$0.00";

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

  // clears the contents of the cart
  public clear() {
    this.cartItems = {};

    // commit to local storage
    this.storeLocal();
    // update cart counts and prices
    this.updateCartCount();
  }

  // update the quantity of an item by product id if the id is in the cart
  public updateProductQuantity(productId: number, quantity: number) {
    if(this.cartItems[productId]) this.cartItems[productId].quantity = quantity;

    this.storeLocal();
    this.updateCartCount();
  }

  // updates the item count of our cart
  public updateCartCount() {
    let count = 0;
    let price = 0;
    for(const key in this.cartItems) {
      // store the quantity of the current item
      let q = this.cartItems[key].quantity;
      // accumulate the item cost times item quantity
      price+= this.cartItems[key].product.price * q;
      // add the item quantity of this cart item to our running total
      count+= q;
    }
    // finally store the result
    this.cartItemCount = count;
    this.cartPrice = price;
    this.cartPriceFormatted = Utils.formatPrice(price);
  }

  // sets the local storage with our current cart state
  public storeLocal() {
    try { localStorage.setItem(lsk, JSON.stringify(this.cartItems)) } catch (err) {
      console.error('encountered error setting local storage: ', err);
    }
  }
}
