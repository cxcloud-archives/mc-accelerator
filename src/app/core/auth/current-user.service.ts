import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { OAuthToken, Customer } from '@cxcloud/ct-types/customers';
import { LocalStorageService } from 'ngx-webstorage';

interface UserData {
  token: OAuthToken;
  customer: Customer;
  environment: any;
}

@Injectable()
export class CurrentUserService {
  public token = new BehaviorSubject<OAuthToken>(null);
  public customer = new BehaviorSubject<Customer>(null);
  public environment = new BehaviorSubject<any>(null);

  constructor(private storage: LocalStorageService, private router: Router) {
    const token = this.storage.retrieve('token');
    const customer = this.storage.retrieve('customer');
    const environment = this.storage.retrieve('environment');
    if (token) {
      this.token.next(token);
    }
    if (customer) {
      this.customer.next(customer);
    }
    if (environment) {
      this.storage.store('environment', environment);
    }
    this.token.subscribe(change => this.storage.store('token', change));
    this.customer.subscribe(change => this.storage.store('customer', change));
    this.environment.subscribe(change =>
      this.storage.store('environment', change)
    );
  }

  get isLoggedIn() {
    return this.customer.getValue() !== null;
  }
}
