import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customers',
    children: [
      {
        path: ':id',
        component: CustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
