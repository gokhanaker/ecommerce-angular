import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart.model';
import { CreditCard } from 'src/app/model/credit-cart/credit-card.model';
import { Order } from 'src/app/model/order/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  form: FormGroup;
  submitted = false;
  orderSent = false;

  constructor(
    public order: Order,
    public creditCard: CreditCard,
    public shoppingCart: Cart,
    public fb: FormBuilder
  ) {
    this.createCheckoutForm(fb);
  }

  createCheckoutForm(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', [Validators.required]],
      country: ['', Validators.required],
      notes: ['', Validators.maxLength(300)],
      cardHolderName: ['', Validators.required],
      cardNumber: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(20)]],
      cardExpiryDate: ['', Validators.required],
      cardSecurityCode: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }

  submitOrder() {
    console.log('form values are: ', this.form.value);
    this.submitted = true;
    if (this.form.valid) {
      this.order.clear();
      this.creditCard.clear();
      this.shoppingCart.clear();
      this.orderSent = true;
      this.form.reset(); // Resetting fields
    }
  }
}
