import { CartItem } from './cart-item.model';
import { Product } from '../product/product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Cart {
  public cartItems: CartItem[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addCartItem(product: Product, quantity: number = 1) {
    let cartItem = this.cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );
    cartItem === undefined
      ? this.cartItems.push(new CartItem(product, quantity))
      : cartItem.quantity++;

    this.calculateCartPrice();
  }

  updateQuantity(product: Product, quantity: number = 1) {
    let cartItem = this.cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );

    if (cartItem !== undefined) {
      cartItem.quantity = quantity;
    }

    this.calculateCartPrice();
  }

  removeCartItem(id: number) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.product.id !== id
    );
    this.calculateCartPrice();
  }

  calculateCartPrice() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.cartItems.forEach((cartItem) => {
      this.itemCount += cartItem.quantity;
      this.cartPrice += cartItem.quantity * cartItem.product.price;
    });
  }

  clear() {
    this.cartItems = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
}
