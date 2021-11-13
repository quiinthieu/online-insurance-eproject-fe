import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomerComponent } from './components/layout/layout.component';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { UpdateProfileComponent } from './update-profile/settings.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: CustomerComponent,
        children: [
          {
            path: '',
            redirectTo:'overview-profile',
            pathMatch:'full'
          },
          {
            path: 'update-profile',
            component: UpdateProfileComponent
          },
          {
            path: 'overview-profile',
            component: ProfileComponent
          },
        ],
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
