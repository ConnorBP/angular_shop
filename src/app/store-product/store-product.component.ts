import { Component, Input } from '@angular/core';
import { StoreProduct } from '../store-product';
import { RouterLink, RouterOutlet } from '@angular/router';

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
        <p><b>Price: </b>{{formatPrice(productInformation.price)}}</p>
    </div>
  `,
  styleUrl: './store-product.component.css'
})
export class StoreProductComponent {
  formatPrice(price: number): string {
    return `${Number(price).toLocaleString(undefined, {
      style: "currency",
      currency: "CAD" // todo: put store currency in a config file/state. For demo this is fine.
    })}`;
  }
  @Input() productInformation!: StoreProduct;
}
