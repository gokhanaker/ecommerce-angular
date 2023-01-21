import { Inject, Injectable } from "@angular/core";
import { Product } from "../product/product.model";

@Injectable()
export class CartItem {
    public product: Product;
    public quantity: number;

    constructor(
        product: Product,
        @Inject(Number) quantity: number
    ) {
        this.product = product;
        this.quantity = quantity;
    }

    public get cartItemPrice() {
        return this.quantity * this.product.price;
    }
}