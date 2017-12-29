import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../../core/order/order.service';
import { Order } from '@cxcloud/ct-types/orders';
import { Customer } from '@cxcloud/ct-types/customers';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  @Input('order') order: Order;
  @Input('customer') customer: Customer;
  deliveries: any;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.deliveries = this.orderService.deliveries;
  }

  getDeliveryItems(id: string) {
    return this.orderService.getDeliveryItems(id);
  }
}
