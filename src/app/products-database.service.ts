import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreProduct } from './store-product';
import { Observable, map } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductsDatabaseService {

  public storeProducts: StoreProduct[] = [];

  constructor(private http: HttpClient) {
    // fetch products list from our "api" upon page load
    this.loadProducts().subscribe();
  }

  // // get all of the products
  // public getProducts(): StoreProduct[] {
  //   return this.storeProducts;
  // }

  // load all of the products from the server.
  // Stores result automatically, but the returned Observable must be subscribed.
  public loadProducts(): Observable<StoreProduct[]> {
    const url: string = 'assets/products/product_database.json';
    return this.http.get(url).pipe(map(response => this.storeProducts = response as StoreProduct[]));
  }

  // finds a product in the product list by its numeric index id
  public getProductById(id: number): StoreProduct | undefined {
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
    return this.storeProducts.find(storeProduct => storeProduct.id == id);
  }

}
