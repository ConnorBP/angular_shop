import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { CartProductListComponent } from '../cart-product-list/cart-product-list.component';

import { ShoppingCartService } from '../shopping-cart.service';
import { JsonPipe } from '@angular/common';

// material components
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartProductListComponent,
    NgFor,
    JsonPipe,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  constructor(public shoppingCartService: ShoppingCartService) {}
}
