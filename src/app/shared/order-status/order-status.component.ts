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
  @Input() dropdown = false;

  stateList = ORDER_STATES;
  isActive = false;

  private _status: any;

  constructor() {}

  ngOnInit() {}

  get state() {
    if (this._status) {
      return this._status;
    }

    if (this.about === 'order') {
      this._status = this.getCurrentStatus(ORDER_STATES, this.order.orderState);
    }
    if (this.about === 'shipment') {
      this._status = this.getCurrentStatus(
        SHIPMENT_STATES,
        this.order.shipmentState
      );
    }
    if (this.about === 'payment') {
      this._status = this.getCurrentStatus(
        PAYMENT_STATES,
        this.order.paymentState
      );
    }
    return this._status;
  }

  set state(status: any) {
    this._status = {
      label: `label-${status.color}`,
      message: status.text
    };
  }

  getCurrentStatus(stateList, state) {
    const currentState = stateList.filter(s => s.state === state)[0];
    return {
      label: `label-${currentState.color}`,
      message: currentState.text
    };
  }

  toggleDropdownList() {
    this.isActive = !this.isActive;
    return this.isActive;
  }

  updateState(state) {
    this.isActive = false;
    this.state = { ...state };
  }
}
