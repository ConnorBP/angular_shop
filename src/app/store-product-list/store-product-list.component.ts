// base imports
import { Component, Inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

// components
import { StoreProductComponent  } from '../store-product/store-product.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// services
import { ProductsDatabaseService } from '../products-database.service';


@Component({
  selector: 'store-product-list',
  standalone: true,
  imports: [
    StoreProductComponent,
    MatProgressSpinnerModule,
    NgFor,
    NgIf,
  ],
  template: `
    <h2>Products</h2>
    <div *ngIf="productsDatabaseService.productsLoaded; else spinner">
      <div id="products" class="grid-container-4 grid-spaced">
        <store-product
          *ngFor="let productInformation of productsDatabaseService.storeProducts"
          [productInformation]="productInformation">
        </store-product>
      </div>
    </div>
    <ng-template #spinner>
        <div>
            <mat-progress-spinner
                class="center"
                color="red"
                mode="indeterminate">
            </mat-progress-spinner>
        </div>
    </ng-template>
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
