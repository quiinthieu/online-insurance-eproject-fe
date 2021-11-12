import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCustomerComponent } from './components/layout/layout.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./components/layout/layout.module').then(
  //       (m) => m.LayoutCustomerModule
  //     ),
  // },
  {
    path: '',
    component: LayoutCustomerComponent,
    children: [
      {
        path: 'a',
        component: CustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
