import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials';
import { ProfileComponent } from 'src/app/customer/profile/profilecomponent';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        // component: ProfileComponent,
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
  ],
})
export class DashboardModule { }
