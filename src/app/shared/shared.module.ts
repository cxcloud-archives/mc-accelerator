import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { ClickOutsideModule } from 'ng-click-outside';

import { InfoCardComponent } from './pannel';
import { BasicCardComponent } from './info-box';
import { OrderStatusComponent } from './order-status';
import { ProductDescriptionComponent } from './product-description';

const DECLARATIONS = [
  InfoCardComponent,
  BasicCardComponent,
  OrderStatusComponent,
  ProductDescriptionComponent
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
