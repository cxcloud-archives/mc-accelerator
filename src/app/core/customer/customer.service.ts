import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Customer } from '@cxcloud/ct-types/customers';
import { OrderService } from '../order/order.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
  public customer = new BehaviorSubject<Customer>(null);

  constructor(private http: HttpClient, private orderService: OrderService) {}

  getCustomers() {
    return this.http.get<Customer[]>('/admin/customers');
  }

  getCustomer(id: string) {
    return this.http
      .get<Customer>(`/admin/customers/${id}`)
      .do(customer => this.customer.next(customer));
  }

  getShippingAddress() {
    const customer = this.customer.getValue();
    return customer.addresses.filter(
      address => address.id === customer.defaultShippingAddressId
    )[0];
  }

  getBillingAddress() {
    const customer = this.customer.getValue();
    return customer.addresses.filter(
      address => address.id === customer.defaultBillingAddressId
    )[0];
  }

  getMyOrders() {
    const customer = this.customer.getValue();
    return this.orderService.getOrders().map(result => {
      return result['results'].filter(
        order => order.customerId === customer.id
      );
    });
  }
}
