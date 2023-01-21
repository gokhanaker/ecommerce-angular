import { CartItem } from "./cart-item.model";
import { Product } from "../product/product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class Cart {
    public cartItems: CartItem[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addCartItem(product: Product, quantity: number = 1) {
        let cartItem = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        
        if(cartItem === undefined) {
            this.cartItems.push(new CartItem(product, quantity));
        } else {
            cartItem.quantity++;
        }

        this.cartCalculation();
    }

    updateQuantity(product: Product, quantity: number) {
        let cartItem = this.cartItems.find(cartItem => cartItem.product.id === product.id);
        
        if(cartItem !== undefined) {
            cartItem.quantity = quantity;
        }
        this.cartCalculation();
    }

    removeCartItem(id: number) {
        let index = this.cartItems.findIndex(cartItem => cartItem.product.id === id);
        this.cartItems.splice(index,1);
        this.cartCalculation();
    }

    cartCalculation() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.cartItems.forEach(cartItem => {
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