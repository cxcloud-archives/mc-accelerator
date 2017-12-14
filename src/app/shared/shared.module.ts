import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { InfoCardComponent } from './info-card/info-card.component';

const DECLARATIONS = [InfoCardComponent];

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
