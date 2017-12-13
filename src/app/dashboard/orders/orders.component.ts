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
  columns: Array<any> = [
    { name: 'Order ID', field: 'id' },
    { name: 'Order Total', field: 'totalPrice.centAmount' },
    { name: 'No. of items', field: 'lineItems.length' },
    { name: 'Order Status', field: 'orderState' },
    { name: 'Date Created', field: 'createdAt' },
    { name: 'Customer Email', field: 'customerEmail' }
  ];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(result => (this.orders = result));
  }
}
