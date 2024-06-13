import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreProduct } from './store-product';
import { Observable, delay, firstValueFrom, map } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductsDatabaseService {

  public productsLoaded: boolean = false;
  public productsLoadedPromise: Promise<boolean> | undefined;
  public storeProducts: StoreProduct[] = [];

  // public storeProductsReady: Observable<StoreProduct> = new Observable((subscriber) => {});

  constructor(private http: HttpClient) {
    // fetch products list from our "api" upon page load

    // for demo purposes this will simulate a server response delay
    const fakeServerDelay: number = 3000;

    this.productsLoadedPromise = firstValueFrom(this.loadProducts().pipe(delay(fakeServerDelay))).then((product) => {
      if(product.length > 0) {
        this.productsLoaded = true;
        this.productsLoadedPromise = Promise.resolve(true);
        return true;
      } else {
        this.productsLoaded = false;
        this.productsLoadedPromise = Promise.resolve(false);
        return false;
      }
    });

    // this.loadProducts().subscribe((response) => {
    //   this.productsLoadedPromise = Promise.resolve(true);
    //   console.log('finished loading products')
    // });
  }

  // load all of the products from the server.
  // Stores result automatically, but the returned Observable must be subscribed.
  public loadProducts(): Observable<StoreProduct[]> {
    const url: string = 'assets/products/product_database.json';
    return this.http.get(url).pipe(map(response => this.storeProducts = response as StoreProduct[]));
  }

  // finds a product in the product list by its numeric index id
  // returns as a promise pending api the constructors api fetch
  public getProductById(id: number): Promise<StoreProduct | undefined> {
    if (this.productsLoaded) {
      return Promise.resolve(this.storeProducts.find(product => product.id === id));
    } else {
      return this.productsLoadedPromise!.then(() => {
        return this.storeProducts.find(product => product.id === id);
      });
    }
  }

}
