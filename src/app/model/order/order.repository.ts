import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "../static.datasource";

@Injectable()
export class OrderRepository {
    public orders: Order[] = [];

    constructor(private dataSource: StaticDataSource) {}

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Order[] {
        this.orders.push(order);
        return this.orders;
    }
}