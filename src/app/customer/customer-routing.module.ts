import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomerComponent } from './components/layout/layout.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: 'test',
            pathMatch: 'full',
          },
          {
            path: 'test',
            component: CustomerComponent
          },
          {
            path: 'customer-policy',
            component: CustomerPolicyComponent
          },
          {
            path: 'policy',
          },



        ],
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
