import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@cxcloud/ct-types/orders';
import { Customer } from '@cxcloud/ct-types/customers';
import { Address } from '@cxcloud/ct-types/common';

@Component({
  selector: 'app-order-approve',
  templateUrl: './order-approve.component.html',
  styleUrls: ['./order-approve.component.scss']
})
export class OrderApproveComponent implements OnInit {
  @Input('order') order: Order;
  @Input('customer') customer: Customer;
  @Input('shippingAddress') shippingAddress: Address;
  @Input('billingAddress') billingAddress: Address;

  constructor() {}

  ngOnInit() {}
}
