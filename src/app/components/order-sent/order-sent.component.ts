import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-sent',
  templateUrl: './order-sent.component.html',
  styleUrls: ['./order-sent.component.css']
})
export class OrderSentComponent {
  orderService: OrderService
  today: string;
  orderId: string;
  orderAddress: string;

  componentWillMount(){
    this.today = new Date().toDateString();
    this.orderId = this.orderService.getOrderData().orderId;
    this.orderAddress = this.orderService.getOrderData().address;
  }
  constructor(){}

  backToStore() {
    window.location.href = "/store";
  }
}
