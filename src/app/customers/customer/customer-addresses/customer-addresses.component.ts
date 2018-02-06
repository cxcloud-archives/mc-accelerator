import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../../core';
import { Customer } from '@cxcloud/ct-types/customers';
import { Address } from '@cxcloud/ct-types/common';

@Component({
  selector: 'app-customer-addresses',
  templateUrl: './customer-addresses.component.html',
  styleUrls: ['./customer-addresses.component.scss']
})
export class CustomerAddressesComponent implements OnInit {
  @Input('customer') customer: Customer;
  addresses: Array<any>;
  // shippingAddress: Address;
  // billingAddress: Address;

  columns: Array<any> = [
    { name: 'Contact name' },
    { name: 'Company name' },
    { name: 'Address' },
    { name: 'City' },
    { name: 'Postal code' },
    { name: 'Region' },
    { name: 'Country' }
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    if (this.customer) {
      const addresses = [];
      addresses.push(
        this.customerService.getShippingAddress(),
        this.customerService.getBillingAddress()
      );
      this.addresses = addresses;

      console.log(this.customerService.getShippingAddress());
    }
  }

  selectAddress() {
    console.log('Address');
  }
}
