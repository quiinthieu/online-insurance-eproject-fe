import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { BuyPolicyComponent } from './components/buy-policy/buy-policy.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { LayoutCustomerComponent } from './components/layout/layout.component';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
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
        path: 'buy-policy',
        component: BuyPolicyComponent
      },
      {
        path: 'profile',
        component: CustomerComponent,
        children: [
          {
            path: '',
            redirectTo: 'overview-profile',
            pathMatch: 'full'
          },
          {
            path: 'transaction',
            component: TransactionTableComponent
          },
          {
            path: 'claim',
            component: ClaimTableComponent
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

      {
        path: 'customer-policy',
        component: CustomerPolicyComponent
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
