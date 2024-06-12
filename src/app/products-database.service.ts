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
    // const url: string = 'assets/products/product_database.json';
    // console.log('loading data');
    // this.http.get(url).subscribe((response) => {
    //   console.trace('got response ', response);
    //   this.storeProducts = response as StoreProduct[];
    // });
    this.loadProducts().subscribe(() => {

      console.log(this.storeProducts);
    });
  }

  // // get all of the products
  // public getProducts(): StoreProduct[] {
  //   return this.storeProducts;
  // }

  // load all of the products from the server
  public loadProducts(): Observable<StoreProduct[]> {
    const url: string = 'assets/products/product_database.json';
    console.info('loading product data');
    return this.http.get(url).pipe(map(response => this.storeProducts = response as StoreProduct[]));
  }

  // finds a product in the product list by its numeric index id
  public getProductById(id: number): StoreProduct | undefined {
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
    return this.storeProducts.find(storeProduct => storeProduct.id == id);
  }

}
