import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart.model';
import { CreditCard } from 'src/app/model/credit-cart/credit-card.model';
import { Order } from 'src/app/model/order/order.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  form: FormGroup;
  submitted = false;
  orderSent = false;
  selectedCity: string = '';
  cityList: string[] = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Mallorca', 'Malaga'];

  constructor(
    public order: Order,
    public creditCard: CreditCard,
    public shoppingCart: Cart,
    public fb: FormBuilder,
    private db: AngularFireDatabase
  ) {
    this.createCheckoutForm(fb);
  }

  createCheckoutForm(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', [Validators.required]],
      notes: ['', Validators.maxLength(300)],
      cardHolderName: ['', Validators.required],
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]{10,20}'),
        ]
      ],
      cardExpiryDate: ['', Validators.required, Validators.minLength(4)],
      cardSecurityCode: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3}')]
      ]
    });
  }

  async submitOrder() {
    console.log('form values are: ', this.form.value);
    this.submitted = true;
    if (this.form.valid) {
      this.order.clear();
      this.creditCard.clear();
      this.shoppingCart.clear();
      this.orderSent = true;
      await this.db.list('/orders').push(this.form.value)
      .then(() => console.log('Data added successfully'))
      .catch(error => console.error('Error adding data', error));
      this.form.reset();
    }
  }
}
