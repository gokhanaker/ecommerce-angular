import { CartItem } from './cart-item.model';
import { Product } from '../product/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class Cart {
  private cartItems$ = new BehaviorSubject<CartItem[]>([]);
  private itemCount$ = new BehaviorSubject<number>(0);
  private cartPrice$ = new BehaviorSubject<number>(0);

  constructor() {}

  addCartItem(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItems$.value;
    const existingItem = currentItems.find(
      (item) => item.product.id === product.id
    );

    let updatedItems: CartItem[];
    if (existingItem) {
      updatedItems = currentItems.map(item =>
        item.product.id === product.id
          ? new CartItem(item.product, item.quantity + 1)
          : item
      );
    } else {
      updatedItems = [...currentItems, new CartItem(product, quantity)];
    }

    this.cartItems$.next(updatedItems);
    this.calculateCartPrice();
  }

  updateQuantity(product: Product, quantity: number): void {
    if (quantity < 0) return;

    const currentItems = this.cartItems$.value;
    const updatedItems = currentItems.map(item =>
      item.product.id === product.id
        ? new CartItem(item.product, quantity)
        : item
    );

    this.cartItems$.next(updatedItems);
    this.calculateCartPrice();
  }

  removeCartItem(id: number): void {
    const filteredItems = this.cartItems$.value.filter(
      item => item.product.id !== id
    );
    this.cartItems$.next(filteredItems);
    this.calculateCartPrice();
  }

  private calculateCartPrice(): void {
    const items = this.cartItems$.value;
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );

    this.itemCount$.next(itemCount);
    this.cartPrice$.next(totalPrice);
  }

  getCartPrice(): Observable<number> {
    return this.cartPrice$.asObservable();
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$.asObservable();
  }

  getItemCount(): Observable<number> {
    return this.itemCount$.asObservable();
  }

  clear(): void {
    this.cartItems$.next([]);
    this.itemCount$.next(0);
    this.cartPrice$.next(0);
  }
}
