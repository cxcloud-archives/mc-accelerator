import { Component, OnInit, Input } from '@angular/core';
import { Order } from '@cxcloud/ct-types/orders';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Input() order: Order;

  constructor() {}

  ngOnInit() {}
}
