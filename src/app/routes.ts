import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product details'
    }
  ];
  
  export default routeConfig;