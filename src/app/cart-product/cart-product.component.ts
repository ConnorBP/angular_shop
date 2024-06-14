import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CartItem } from '../cart-item';
import { ShoppingCartService } from '../shopping-cart.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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

  constructor(private cartService: ShoppingCartService) {}

  public updateQuantity() {
    this.cartService.updateProductQuantity(this.cartItemInformation.product.id,this.cartItemInformation.quantity);
    console.log('changed quantity to ',this.cartItemInformation.quantity);
  }

  @Input() cartItemInformation!: CartItem;
}
