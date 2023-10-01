import { Component } from '@angular/core';

@Component({
  selector: 'app-order-sent',
  templateUrl: './order-sent.component.html',
  styleUrls: ['./order-sent.component.css']
})
export class OrderSentComponent {
  readonly today = new Date();

  backToStore() {
    window.location.href = "/store";
  }
}
