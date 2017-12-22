import { Component, OnInit, Input } from '@angular/core';
import { ORDER_STATES, PAYMENT_STATES, SHIPMENT_STATES } from './states';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {
  @Input() order: any;
  @Input() about: string;

  constructor() {}

  ngOnInit() {}

  get state() {
    if (this.order) {
      if (this.about === 'order') {
        return this.getStatus(ORDER_STATES, this.order.orderState);
      }
      if (this.about === 'shipment') {
        return this.getStatus(SHIPMENT_STATES, this.order.shipmentState);
      }
      if (this.about === 'payment') {
        return this.getStatus(PAYMENT_STATES, this.order.paymentState);
      }
    }
  }

  getStatus(states, state) {
    const status = states.filter(st => st.state === state)[0];
    return {
      label: `label-${status.color}`,
      message: status.text
    };
  }
}
