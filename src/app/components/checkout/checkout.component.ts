import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart/cart.model';
import { CreditCard } from 'src/app/model/credit-cart/credit-card.model';
import { Order } from 'src/app/model/order/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  orderSubmitted = false;

  constructor(
    public order: Order,
    public creditCard: CreditCard,
    public shoppingCart: Cart
  ) {}

  submitOrder(form: NgForm) {
    if (form.valid) {
      this.orderSubmitted = true;
      this.order.clear();
      this.creditCard.clear();
      this.shoppingCart.clear();
    }
  }
}
