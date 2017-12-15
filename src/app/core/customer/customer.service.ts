import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CUSTOMERS } from '../../mock/customer';
import { Customer } from '@cxcloud/ct-types/customers';

@Injectable()
export class CustomerService {
  public customer = new BehaviorSubject<Customer>(null);
  constructor() {}

  // createOrder(cart: Cart) {
  //   return this.http
  //     .post<Order>(`/orders`, {
  //       cartId: cart.id,
  //       cartVersion: cart.version
  //     })
  //     .do(order => {
  //       this.order.next(order);
  //       this.cartService.createCart();
  //     });
  // }

  // getOrder() {
  //   return this.order.getValue();
  // }

  getCustomersList() {
    return CUSTOMERS;
  }

  getCustomer(id: string) {
    const customer = CUSTOMERS.filter(resp => resp.id === id)[0];
    this.customer.next(customer);
    return customer;
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
}
