import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomerComponent } from './components/layout/layout.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from '../admin/modules/profile/profile.component';
import { ProfileDetailsComponent } from './update-profile/forms/profile-details/profile-details.component';
import { UpdateProfileComponent } from './update-profile/settings.component';

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
            path: 'profile',
            component: UpdateProfileComponent
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
