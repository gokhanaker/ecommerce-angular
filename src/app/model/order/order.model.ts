import { Injectable } from '@angular/core';

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public email: string;
  public address: string;
  public city: string;
  public country: string;
  public shipped: boolean = false;
  public notes: string;

  constructor() {}

  clear() {
    this.name = '';
    this.address = '';
    this.city = '';
    this.country = '';
    this.shipped = false;
    this.notes = '';
  }
}
