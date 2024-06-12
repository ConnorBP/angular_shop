import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDatabaseService implements OnInit {

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    const url: string = 'assets/products/product_database.json';

    this.http.get(url).subscribe((response) => {

    });
  }
}
