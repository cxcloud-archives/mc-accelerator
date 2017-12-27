import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { ClickOutsideModule } from 'ng-click-outside';

import { InfoCardComponent } from './pannel/pannel.component';
import { BasicCardComponent } from './info-box/info-box.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const DECLARATIONS = [
  InfoCardComponent,
  BasicCardComponent,
  OrderStatusComponent,
  OrderSummaryComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    ClarityModule.forRoot(),
    ClickOutsideModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class SharedModule {}
