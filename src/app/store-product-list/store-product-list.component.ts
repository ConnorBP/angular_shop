import { Component } from '@angular/core';
import { StoreProductComponent  } from '../store-product/store-product.component';
import { StoreProduct } from '../store-product';

@Component({
  selector: 'store-product-list',
  standalone: true,
  imports: [
    StoreProductComponent
  ],
  template: `
    <h2>Products</h2>
    <div id="products" class="grid-container-4 grid-spaced">
      <store-product [productInformation]="productInformation"></store-product>
      <store-product [productInformation]="productInformation"></store-product>
      <store-product [productInformation]="productInformation"></store-product>
      <store-product [productInformation]="productInformation"></store-product>
      <store-product [productInformation]="productInformation"></store-product>
    </div>
  `,
  styleUrl: './store-product-list.component.css'
})
export class StoreProductListComponent {
  productInformation: StoreProduct = {
    name: "testing",
    description: 'a test product',
    price: 999.99,
    image_path: 'assets/products/images/ancient_tomb.webp'
  };
}
