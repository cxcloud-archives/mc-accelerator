import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';

const DECLARATIONS = [OrdersComponent, OrderDetailsComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    ClarityModule.forRoot(),
    OrdersRoutingModule,
    SharedModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class OrdersModule {}