import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { StoreProductListComponent } from './store-product-list/store-product-list.component';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <app-header></app-header>
  <app-navbar></app-navbar>
  <hr>
  <br>
  <router-outlet></router-outlet>
`,
    styleUrls: ['./app.component.css'],
    imports: [
        HttpClientModule,
        RouterModule,
        HeaderComponent,
        StoreProductListComponent,
        NavbarComponent
    ]
})
export class AppComponent {
  title = 'Home';
}
