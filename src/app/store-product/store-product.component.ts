import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Utils from '../utils';

import { StoreProduct } from '../store-product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'store-product',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template: `
    <div class="grid-item bg hasTooltip">
        <div class="product center-text center-all">
            <a [routerLink]="['/details', productInformation.id]">
              <img [src]="productInformation.image_path" alt="Product image for {{productInformation.name}}.">
            </a>
            <h5>{{productInformation.name}}</h5>
        </div>
        <!-- <blockquote class="grid-item center-v"> -->
          <span>
            {{productInformation.description}}
          </span>
        <!-- </blockquote> -->
        <p><b>Price: </b>{{formattedPrice}}</p>
        <button (click)="shopingCartService.addItem(productInformation)">Add To Cart</button>
    </div>
  `,
  styleUrl: './store-product.component.css'
})
export class StoreProductComponent implements OnInit {

  formattedPrice: string = "";

  constructor(public shopingCartService: ShoppingCartService) {
    // input vars not yet ready here
  }

  ngOnInit(): void {
    this.formattedPrice = Utils.formatPrice(this.productInformation.price);
  }

  @Input() productInformation!: StoreProduct;
}
