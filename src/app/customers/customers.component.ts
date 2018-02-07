import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../core';
import { Customer } from '@cxcloud/ct-types/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  columns: Array<any> = [
    { name: 'Customer number', field: 'id' },
    { name: 'First name', field: 'firstName' },
    { name: 'Last name', field: 'lastName' },
    { name: 'Company', field: 'company' },
    { name: 'Email', field: 'email' },
    { name: 'Created on', field: 'createdAt' },
    { name: 'Modified on', field: 'lastModifiedAt' }
  ];
  placeholder = '------';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService
      .getCustomers()
      .subscribe(result => (this.customers = result));
  }

  selectCustomer(customerId) {
    this.router.navigateByUrl(`/customers/${customerId}`);
  }
}
