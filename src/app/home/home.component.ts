import { Component } from '@angular/core';
import { StoreProductListComponent } from "../store-product-list/store-product-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
      StoreProductListComponent,
    ]
})
export class HomeComponent {

}
