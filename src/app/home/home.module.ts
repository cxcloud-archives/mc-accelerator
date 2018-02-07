import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { CoreModule } from '../core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

const DECLARATIONS = [HomeComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class HomeModule {}
