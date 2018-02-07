import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared';
import { PipeModule } from '../utils';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import {
  OrderComponent,
  OrderApproveComponent,
  OrderDeliveryComponent,
  OrderSummaryComponent
} from './order';

const DECLARATIONS = [
  OrdersComponent,
  OrderComponent,
  OrderSummaryComponent,
  OrderApproveComponent,
  OrderDeliveryComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    PipeModule,
    ClarityModule.forRoot(),
    OrdersRoutingModule,
    SharedModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class OrdersModule {}
