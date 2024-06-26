/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductsDatabaseService } from './app/products-database.service';
// Routing:
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { ShoppingCartService } from './app/shopping-cart.service';
// Animation:
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(
  AppComponent,
  {
      providers: [
      provideProtractorTestingSupport(),
      provideHttpClient(),
      provideAnimationsAsync(),
      ProductsDatabaseService,
      ShoppingCartService,
      provideRouter(routeConfig),
    ]
  }
)
  .catch(err => console.error(err));
