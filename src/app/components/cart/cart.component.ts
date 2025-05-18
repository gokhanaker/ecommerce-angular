import { Component, OnInit } from '@angular/core';
import { Cart } from '@models/cart/cart.model';
import { CartItem } from '@models/cart/cart-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  cartPrice$: Observable<number>;
  itemCount$: Observable<number>;

  constructor(private cart: Cart) {}

  ngOnInit() {
    this.cartItems$ = this.cart.getCartItems();
    this.cartPrice$ = this.cart.getCartPrice();
    this.itemCount$ = this.cart.getItemCount();
  }

  updateQuantity(cartItem: CartItem, quantity: number) {
    this.cart.updateQuantity(cartItem.product, quantity);
  }

  removeItem(productId: number) {
    this.cart.removeCartItem(productId);
  }
}
