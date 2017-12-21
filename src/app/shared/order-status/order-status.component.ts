import { Component, OnInit, Input } from '@angular/core';

const ORDER_STATUS = [
  {
    state: 'Open',
    color: 'info'
  },
  {
    state: 'Confirmed',
    color: 'warning'
  },
  {
    state: 'Completed',
    color: 'success'
  },
  {
    state: 'Canceled',
    color: 'error'
  }
];
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  @Input() order: any;
  constructor() {}

  ngOnInit() {}

  getStatusClass() {
    return ORDER_STATUS.reduce((acc, obj) => {
      acc[obj.state] = `label-${obj.color}`;
      return acc;
    }, {});
  }
}
