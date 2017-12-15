import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../core/order/order.service';
import { CustomerService } from '../../core/customer/customer.service';
import { Order } from '@cxcloud/ct-types/orders';
import { Customer } from '@cxcloud/ct-types/customers';
import { Address } from '@cxcloud/ct-types/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  customer: any;
  shippingAddress: Address;
  billingAddress: Address;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // Get order by its id
      this.orderService.getOrder(params['id']).subscribe(order => {
        if (order) {
          this.order = order;
          console.log(order);
          this.customer = this.customerService.getCustomer(
            this.order.customerId
          );
          this.shippingAddress = this.customerService.getShippingAddress();
          this.billingAddress = this.customerService.getBillingAddress();
        }
      });
    });
  }

  getOrderStateClass() {
    return {
      Open: 'label-info',
      Confirmed: 'label-warning',
      Complete: 'label-success',
      Cancelled: 'label-error'
    };
  }
}