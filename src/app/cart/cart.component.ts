import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { JsonPipe } from '@angular/common';

// material components
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgFor,
    JsonPipe,
    MatSlideToggleModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  constructor(public shoppingCartService: ShoppingCartService) {}
}
