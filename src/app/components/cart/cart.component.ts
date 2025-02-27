import { Component } from '@angular/core';
import { Cart } from '@models/cart/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cart: Cart) {}
}
