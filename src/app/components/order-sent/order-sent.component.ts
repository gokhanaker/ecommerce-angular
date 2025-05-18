import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '@services/order/order.service';

@Component({
  selector: 'app-order-sent',
  templateUrl: './order-sent.component.html',
  styleUrls: ['./order-sent.component.css']
})
export class OrderSentComponent implements OnInit {
  today: string;
  orderId: string;
  orderAddress: string;
  totalPrice: number;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const orderData = this.orderService.getOrderData();

    this.orderId = orderData.orderId;
    this.orderAddress = orderData.address;
    this.totalPrice = orderData.totalPurchasePrice;
  }

  getEstimatedDeliveryDate(): string {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5); // Assuming 5 days delivery time
    return deliveryDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }

  backToStore() {
    this.router.navigate(['/store']);
  }
}
