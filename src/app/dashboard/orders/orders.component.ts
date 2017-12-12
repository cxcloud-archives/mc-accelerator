import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/order/order.service';
import { Order } from '@cxcloud/ct-types/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(resp => (this.orders = resp));
    console.log(this.orders);
  }
}
