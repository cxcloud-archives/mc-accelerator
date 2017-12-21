import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { InfoCardComponent } from './pannel/pannel.component';
import { BasicCardComponent } from './info-box/info-box.component';
import { OrderStatusComponent } from './order-status/order-status.component';

const DECLARATIONS = [
  InfoCardComponent,
  BasicCardComponent,
  OrderStatusComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class SharedModule {}
