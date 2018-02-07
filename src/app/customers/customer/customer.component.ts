import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../core';
import { Customer } from '@cxcloud/ct-types/customers';
import { Address } from '@cxcloud/ct-types/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // Get order by its id
      this.customerService.getCustomer(params['id']).subscribe(customer => {
        if (customer) {
          this.customer = customer;
        }
      });
    });
  }
}
