import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-sent',
  templateUrl: './order-sent.component.html',
  styleUrls: ['./order-sent.component.css']
})
export class OrderSentComponent {
  today: string;
  orderId: string;
  orderAddress: string;

  constructor(private orderService: OrderService, private router: Router){}

  ngOnInit() {
    this.today = new Date().toDateString();
    console.log("orderService data: ", this.orderService.getOrderData());
    this.orderId = this.orderService.getOrderData().orderId;
    this.orderAddress = this.orderService.getOrderData().address;
  }

  backToStore() {
    this.router.navigate(['/store']);
  }
}
