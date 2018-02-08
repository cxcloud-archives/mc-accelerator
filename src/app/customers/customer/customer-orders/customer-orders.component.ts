import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core';
import { Customer } from '@cxcloud/ct-types/customers';
import { Order } from '@cxcloud/ct-types/orders';
@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {
  myOrders: Order[];
  columns: Array<any> = [
    { name: 'Order number' },
    { name: 'Order status' },
    { name: 'Payment status' },
    { name: 'Shipment status' },
    { name: 'Order total' },
    { name: 'Created on' }
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getMyOrders().subscribe(orders => {
      this.myOrders = orders;
    });
  }
  selectOrder() {
    console.log('Select my order');
  }
}
