import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Cart } from '@models/cart/cart.model';
import { CreditCard } from '@models/credit-cart/credit-card.model';
import { Order } from '@models/order/order.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid';
import { OrderService } from '@services/order/order.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  selectedCity: string = '';
  cityList: string[] = [
    'Barcelona',
    'Madrid',
    'Valencia',
    'Sevilla',
    'Mallorca',
    'Malaga'
  ];
  orderId: string;

  constructor(
    private order: Order,
    private creditCard: CreditCard,
    private cart: Cart,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createCheckoutForm(this.fb);
  }

  futureTimeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputDate = new Date(control.value);
      const now = new Date();
      if (inputDate.getTime() < now.getTime()) {
        return { pastTime: true };
      }
      return null;
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
        [Validators.required, Validators.pattern('[0-9]{10,20}')]
      ],
      cardExpiryDate: ['', [Validators.required, this.futureTimeValidator()]],
      cardSecurityCode: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3}')]
      ]
    });
  }

  generateOrderId() {
    this.orderId = uuidv4();
    this.form.value.orderId = this.orderId;
  }

  async addCartItemDataToOrder() {
    const cartItems = await this.cart.getCartItems().pipe(take(1)).toPromise();
    const totalPrice = await this.cart.getCartPrice().pipe(take(1)).toPromise();
    
    this.form.value.cartItems = cartItems;
    this.form.value.totalPurchasePrice = totalPrice;
  }

  resetAndClearFields() {
    this.order.clear();
    this.creditCard.clear();
    this.cart.clear();
    this.form.reset();
  }

  redirectToOrderSentPage() {
    this.router.navigate(['/order-sent']);
  }

  async submitOrder() {
    if (this.form.valid) {
      this.generateOrderId();
      await this.addCartItemDataToOrder();
      await this.db
        .object(`/orders/${this.orderId}`)
        .set(this.form.value)
        .then(() => {
          console.log('Data sent successfully to Firebase database');
          this.submitted = true;
          this.orderService.setOrderData(this.form.value);
          this.resetAndClearFields();
          this.redirectToOrderSentPage();
        })
        .catch((error) => {
          console.error('Error submitting data to Firebase database', error);
        });
    }
  }
}
