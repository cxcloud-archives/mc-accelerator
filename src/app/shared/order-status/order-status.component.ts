import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../../core';
// import { Order } from '@cxcloud/ct-types/orders';
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

  private _receivedState: string;
  private _status: any;
  action: any;
  isActive = false;

  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  get stateList() {
    if (this.order) {
      if (this.about === 'order') {
        this._receivedState = this.order.orderState;
        return ORDER_STATES;
      }
      if (this.about === 'shipment') {
        this._receivedState = this.order.shipmentState;
        return SHIPMENT_STATES;
      }
      if (this.about === 'payment') {
        this._receivedState = this.order.paymentState;
        return PAYMENT_STATES;
      }
    }
  }

  get currentState() {
    if (this._status) {
      return this._status;
    }
    return (this._status = this.getStatusProperties(
      this.stateList,
      this._receivedState
    ));
  }

  set currentState(status: any) {
    this._status = {
      label: `label-${status.color}`,
      message: status.text
    };
  }

  getStatusProperties(stateList, currentState) {
    if (currentState) {
      const state = stateList.filter(s => s.state === currentState)[0];
      return {
        label: `label-${state.color}`,
        message: state.text
      };
    }
    return {
      label: '',
      message: 'Select...'
    };
  }

  getAction(state) {
    switch (this.about) {
      case 'order':
        return {
          action: 'changeOrderState',
          orderState: state
        };
      case 'shipment':
        return {
          action: 'changeShipmentState',
          shipmentState: state
        };
      case 'payment':
        return {
          action: 'changePaymentState',
          paymentState: state
        };
    }
  }

  updateState(state) {
    this.isActive = false;
    const action = this.getAction(state.state);
    this.orderService.updateOrder(action);
    this.currentState = { ...state };
  }

  toggleDropdownList() {
    this.isActive = !this.isActive;
  }

  onClickedOutside() {
    if (this.isActive) {
      this.isActive = false;
    }
  }
}
