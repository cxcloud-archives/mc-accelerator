import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '../layout/layout.module';

const DECLARATIONS = [DashboardComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    LayoutModule,
    DashboardRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class DashboardModule {}
