import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CartItem } from '../cart-item';
import { ShoppingCartService } from '../shopping-cart.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import Utils from '../utils';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {

  perItemPriceFormatted: string = "";
  totalPriceFormatted: string = "";

  constructor(private cartService: ShoppingCartService) {}

  get formattedUnitPrice() {
    return Utils.formatPrice(this.cartItemInformation.product.price);
  }

  get formattedTotalPrice() {
    return Utils.formatPrice(this.cartItemInformation.product.price * this.cartItemInformation.quantity);
  }

  public updateQuantity(e: any) {
    let newNumber = Number(e.target.value);
    this.cartService.updateProductQuantity(this.cartItemInformation.product.id,newNumber);
    // console.log('changed quantity to ',newNumber, ' resulting in ', this.cartItemInformation);
  }

  public removeFromCart() {
    this.cartService.removeProduct(this.cartItemInformation.product.id);
  }

  @Input() cartItemInformation!: CartItem;
}
