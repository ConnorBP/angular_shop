import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductsDatabaseService } from '../products-database.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
    productId = -1;
    constructor(private route: ActivatedRoute) {
        this.productId = Number(this.route.snapshot.params['id']);
    }
}
