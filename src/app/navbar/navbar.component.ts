import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public shoppingCartService: ShoppingCartService){}
}
