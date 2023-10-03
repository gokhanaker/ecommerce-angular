import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public data: any;
  constructor() { }

  setOrderData(data: any) {
    this.data = data;
  }

  getOrderData() {
    return this.data;
  }
}
