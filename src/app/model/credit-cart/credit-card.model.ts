import { Inject, Injectable } from '@angular/core';

@Injectable()
export class CreditCard {
  public holderName: string;
  public cardNumber: string;
  public expiryDate: string;
  public securityCode: string;

  constructor(
    @Inject(String) holderName: string,
    @Inject(String) cardNumber: string,
    @Inject(String) expiryDate: string,
    @Inject(String) securityCode: string
  ) {
    this.holderName = holderName;
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.securityCode = securityCode;
  }

  clear() {
    this.holderName = '';
    this.cardNumber = '';
    this.expiryDate = '';
    this.securityCode = '';
  }
}
