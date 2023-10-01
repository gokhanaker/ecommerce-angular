import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart.model';
import { CreditCard } from 'src/app/model/credit-cart/credit-card.model';
import { Order } from 'src/app/model/order/order.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  form: FormGroup;
  submitted = false;
  selectedCity: string = '';
  cityList: string[] = ['Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Mallorca', 'Malaga'];
  orderId: string;

  constructor(
    public order: Order,
    public creditCard: CreditCard,
    public shoppingCart: Cart,
    public fb: FormBuilder,
    private db: AngularFireDatabase
  ) {
    this.createCheckoutForm(fb);
  }

  futureTimeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputDate = new Date(control.value);
      const now = new Date();
      if (inputDate.getTime() < now.getTime()) {
        return { pastTime: true }; // return object if the validation is not passed.
      }
      return null; // return null if validation is passed.
    };
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
      cardExpiryDate: ['', [Validators.required, this.futureTimeValidator() ]],
      cardSecurityCode: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3}')]
      ]
    });
  }

  generateOrderIdAndAttachItToFormData(){
    this.form.value.orderId = uuidv4();
  }

  resetAndClearFields() {
    this.order.clear();
    this.creditCard.clear();
    this.shoppingCart.clear();
    this.form.reset();
  }

  redirectToOrderSentPage(){
    window.location.href = "/order-sent";
  }

  async submitOrder() {
    if (this.form.valid) {
      this.generateOrderIdAndAttachItToFormData();
      console.log("form values: ", this.form.value);
      await this.db.list('/orders').push(this.form.value)
      this.submitted = true;
      this.resetAndClearFields();
      //this.redirectToOrderSentPage();
    }
  }
}
