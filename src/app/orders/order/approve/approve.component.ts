import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@cxcloud/ct-types/orders';
import { Customer } from '@cxcloud/ct-types/customers';
import { Address } from '@cxcloud/ct-types/common';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {
  @Input('order') order: Order;
  @Input('customer') customer: Customer;
  @Input('shippingAddress') shippingAddress: Address;
  @Input('billingAddress') billingAddress: Address;

  constructor() {}

  ngOnInit() {}
}
