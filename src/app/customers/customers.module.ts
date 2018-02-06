import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared';
import { PipeModule } from '../utils';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import {
  CustomerComponent,
  CustomerDetailsComponent,
  CustomerAddressesComponent,
  CustomerOrdersComponent
} from './customer';

const DECLARATIONS = [
  CustomersComponent,
  CustomerComponent,
  CustomerDetailsComponent,
  CustomerAddressesComponent,
  CustomerOrdersComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    PipeModule,
    ClarityModule.forRoot(),
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class CustomersModule {}
