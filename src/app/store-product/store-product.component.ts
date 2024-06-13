import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import Utils from '../utils';

import {MatTooltip, MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { StoreProduct } from '../store-product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'store-product',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatTooltipModule,
    MatButtonModule
  ],
  template: `
    <div class="grid-item bg">
        <div class="hasTooltip">
          <div class="product center-text center-all">
              <a [routerLink]="['/details', productInformation.id]">
                <img [src]="productInformation.image_path" alt="Product image for {{productInformation.name}}.">
              </a>
              <h5>{{productInformation.name}}</h5>
          </div>
          <span>
            {{productInformation.description}}
          </span>
        </div>
        <br>
        <div>
          <div class="flayout">
            <div class="flexbox bg2 container"><b>Price: </b>{{formattedPrice}}</div>
            <div class="right">
              <button mat-raised-button
                      [matTooltipDisabled]="true"
                      (click)="shopingCartService.addItem(productInformation);displayTooltip();"
                      matTooltip="Added to cart!"
                      #cartToolTip="matTooltip">
                Add To Cart
              </button>
          </div>
          </div>
          
        </div>
    </div>
  `,
  styleUrl: './store-product.component.css'
})
export class StoreProductComponent implements OnInit {

  @ViewChild("cartToolTip") cartToolTip!: MatTooltip;

  formattedPrice: string = "";

  constructor(public shopingCartService: ShoppingCartService) {
    // input vars not yet ready here
  }

  public displayTooltip(){
    this.cartToolTip.disabled = false;
    this.cartToolTip.show()
    setTimeout(() => {
      this.cartToolTip.disabled = true;
    }, 1000);
  }

  ngOnInit(): void {
    this.formattedPrice = Utils.formatPrice(this.productInformation.price);
  }

  @Input() productInformation!: StoreProduct;
}
