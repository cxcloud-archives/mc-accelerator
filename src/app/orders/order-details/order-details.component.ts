import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../core/order/order.service';
import { Order } from '@cxcloud/ct-types/orders';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // Get order by its id
      this.orderService.getOrder(params['id']).subscribe(order => {
        if (order) {
          console.log(order);
          this.order = order;
        }
      });
    });
  }
}
