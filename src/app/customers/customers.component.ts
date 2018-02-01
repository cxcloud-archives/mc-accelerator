import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../core/customer/customer.service';
import { Customer } from '@cxcloud/ct-types/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  columns: Array<any> = [
    { name: 'Customer ID', field: 'id' },
    { name: 'First name', field: 'firstName' },
    { name: 'Last name', field: 'lastName' },
    { name: 'Company', field: 'company' },
    { name: 'Email', field: 'email' },
    { name: 'Created on', field: 'createdAt' },
    { name: 'Modified on', field: 'lastModifiedAt' }
  ];
  placeholder = '------';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomers()
      .subscribe(result => (this.customers = result));
  }
}
