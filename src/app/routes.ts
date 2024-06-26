import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { DetailsComponent } from "./details/details.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Webstore Demo',
      data: {animation: 'HomePage'},
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us',
        data: {animation: 'AboutPage'},
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'User Login'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product details'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Shopping Cart',
    },
    {
      path: 'cart/checkout',
      component: CheckoutComponent,
      title: 'Checkout Cart',
    },
  ];
  
  export default routeConfig;