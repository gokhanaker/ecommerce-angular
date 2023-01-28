import { Inject, Injectable } from '@angular/core';

@Injectable()
export class CreditCard {
  public holderName: string;
  public cardNumber: string;
  public expiryDate: string;
  public securityCode: string;

  constructor() {}

  clear() {
    this.holderName = '';
    this.cardNumber = '';
    this.expiryDate = '';
    this.securityCode = '';
  }
}
