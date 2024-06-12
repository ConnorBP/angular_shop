import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductsDatabaseService } from '../products-database.service';
import { StoreProduct } from '../store-product';
import { NgIf } from '@angular/common';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

    productDetails: StoreProduct | undefined;
    constructor(
      private route: ActivatedRoute,
      public productsDatabase: ProductsDatabaseService,
    ) {
        this.productsDatabase.loadProducts().subscribe();
        const productId = Number(this.route.snapshot.params['id']);
        // set the product data once it comes in from the api
        this.productsDatabase.getProductById(productId)?.then((val) => {
          this.productDetails = val;
        });
    }
}
