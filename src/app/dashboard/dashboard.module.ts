import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { CoreModule } from '../core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const DECLARATIONS = [
  DashboardComponent,
  OrdersComponent,
  OrderDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    ClarityModule.forRoot(),
    LayoutModule,
    DashboardRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class DashboardModule {}
