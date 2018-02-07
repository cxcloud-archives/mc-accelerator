import { Component, OnInit } from '@angular/core';
import { OrderService } from '../core';
import { Order } from '@cxcloud/ct-types/orders';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orders: any;
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(result => {
      this.orders = result;
    });
  }
}
