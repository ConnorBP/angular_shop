import { Component, Input } from '@angular/core';
import { StoreProduct } from '../store-product';

@Component({
  selector: 'store-product',
  standalone: true,
  imports: [],
  template: `
    <div class="grid-item bg hasTooltip">
        <div class="center-text center-all">
            <img [src]="productInformation.image_path" alt="Product image for {{productInformation.name}}.">
            <h5>{{productInformation.name}}</h5>
        </div>
        <!-- <blockquote class="grid-item center-v"> -->
          <span>
            {{productInformation.description}}
          </span>
        <!-- </blockquote> -->
        <p><b>Price: </b>\${{productInformation.price}} CAD</p>
    </div>
  `,
  styleUrl: './store-product.component.css'
})
export class StoreProductComponent {
  @Input() productInformation!: StoreProduct;
  
}
