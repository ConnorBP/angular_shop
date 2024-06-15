import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ShoppingCartService } from '../shopping-cart.service';
import Utils from '../utils';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatCardModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  contactInfoFormGroup = this._formBuilder.group({
    contactName: ['', Validators.required],
    contactMethod: ['', Validators.required],
  });

  shippingMethodFormGroup = this._formBuilder.group({
    shipOrPickup: ['', Validators.required],
  })

  get totalAfterTaxesFormatted() {
    return Utils.formatPrice(this.cartService.cartPrice + Utils.calculateTaxes(this.cartService.cartPrice));
  }

  get totalTaxesFormatted() {
    return Utils.formatPrice(Utils.calculateTaxes(this.cartService.cartPrice));
  }

  constructor(private _formBuilder: FormBuilder, public cartService: ShoppingCartService) {}
}
