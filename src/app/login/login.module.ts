import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

const DECLARATIONS = [LoginComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    LoginRoutingModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class LoginModule {}
