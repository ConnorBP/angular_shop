/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductsDatabaseService } from './app/products-database.service';

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(), provideHttpClient(), ProductsDatabaseService]})
  .catch(err => console.error(err));
