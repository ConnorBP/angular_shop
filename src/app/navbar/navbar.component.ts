import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { NgIf } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatBadgeModule,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public shoppingCartService: ShoppingCartService){}
  public greaterThan(subj: number, num: number) {
    return subj < num;
  }
}
