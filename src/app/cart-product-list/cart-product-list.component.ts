import { Component } from '@angular/core';

import { CartProductComponent } from '../cart-product/cart-product.component';
import { ShoppingCartService } from '../shopping-cart.service';
import { NgFor, NgForOf } from '@angular/common';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-product-list',
  standalone: true,
  imports: [
    CartProductComponent,
    NgFor,
    NgForOf,
  ],
  templateUrl: './cart-product-list.component.html',
  styleUrl: './cart-product-list.component.css'
})
export class CartProductListComponent {
  constructor(public cartService: ShoppingCartService) {
    
  }

  get getCartItems() {
    if(this.cartService.cartItems) {
      return Object.values(this.cartService.cartItems);
    } else {
      return new Array<CartItem>()
    }
  }
}
