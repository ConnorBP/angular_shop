import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { StoreProductListComponent } from './store-product-list/store-product-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    HeaderComponent,
    StoreProductListComponent,
  ],
  template: `
  <app-header></app-header>
  <store-product-list></store-product-list>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
