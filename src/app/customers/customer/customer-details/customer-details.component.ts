import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from '@cxcloud/ct-types/customers';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  @Input('customer') customer: Customer;
  password = new FormControl();

  constructor() {}

  ngOnInit() {}
}
