import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { OrdersComponent } from './orders/orders.component';

const DECLARATIONS = [DashboardComponent, OrdersComponent];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    LayoutModule,
    DashboardRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class DashboardModule {}
