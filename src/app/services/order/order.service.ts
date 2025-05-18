import { Injectable } from '@angular/core';
import { IOrderData } from '../../model/order/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private data: IOrderData;

  constructor() {}

  setOrderData(data: IOrderData) {
    this.data = data;
  }

  getOrderData(): IOrderData {
    return this.data;
  }
}
