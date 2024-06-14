import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChildrenOutletContexts, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { StoreProductListComponent } from './store-product-list/store-product-list.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { slideInAnimation } from './animations';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <app-header></app-header>
  <app-navbar></app-navbar>
  <hr>
  <br>
  <div [@routeAnimations]="getRouteAnimationData()">
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  </div>
`,
    styleUrls: ['./app.component.css'],
    imports: [
        HttpClientModule,
        RouterModule,
        RouterOutlet,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
    ],
    animations: [
      slideInAnimation,
    ],
})
export class AppComponent {
  title = 'Home';

  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
