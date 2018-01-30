import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';

import { HeaderComponent } from './header/header.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';

const DECLARATIONS = [HeaderComponent, SidenavBarComponent];

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
export class LayoutModule {}
