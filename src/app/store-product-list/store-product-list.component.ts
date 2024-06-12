// base imports
import { Component, Inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// components
import { StoreProductComponent  } from '../store-product/store-product.component';
import { StoreProduct } from '../store-product';

// services
import { ProductsDatabaseService } from '../products-database.service';


@Component({
  selector: 'store-product-list',
  standalone: true,
  imports: [
    StoreProductComponent,
    NgFor,
    NgIf,
  ],
  template: `
    <h2>Products</h2>
    <div id="products" class="grid-container-4 grid-spaced">
      <store-product
        *ngFor="let productInformation of productsDatabaseService.storeProducts"
        [productInformation]="productInformation">
      </store-product>
    </div>
  `,
  styleUrl: './store-product-list.component.css'
})
export class StoreProductListComponent implements OnInit {
  constructor(public productsDatabaseService: ProductsDatabaseService) {}

  ngOnInit(): void {
    // for if we want to cause a load manually:
    // this.productsDatabaseService.loadProducts().subscribe(products => {
    //   this.productInformationList = products;
    //   console.log(this.productInformationList);
    // });
  }
}
