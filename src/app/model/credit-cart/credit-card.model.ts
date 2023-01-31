import { Inject, Injectable } from '@angular/core';

@Injectable()
export class CreditCard {
  public cardHolderName: string;
  public cardNumber: string;
  public cardExpiryDate: string;
  public cardSecurityCode: string;

  constructor() {}

  clear() {
    this.cardHolderName = '';
    this.cardNumber = '';
    this.cardExpiryDate = '';
    this.cardSecurityCode = '';
  }
}
