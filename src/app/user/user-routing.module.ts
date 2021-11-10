import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LifeInsuranceComponent } from './components/life-insurance/life-insurance.component';
import { HealthInsuranceComponent } from './components/health-insurance/health-insurance.component';
import { MotorInsuranceComponent } from './components/motor-insurance/motor-insurance.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerGuard } from '../services/guard/customer.guard';
import { LoginGuard } from '../services/guard/login.guard';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { HomeInsuranceComponent } from './components/home-insurance/home-insurance.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'customer',
        canActivate: [CustomerGuard],
        loadChildren: () =>
          import('./customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'login',
        canActivate: [LoginGuard],
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'life-insurance',
        component: LifeInsuranceComponent,
      },
      {
        path: 'health-insurance',
        component: HealthInsuranceComponent,
      },
      {
        path: 'motor-insurance',
        component: MotorInsuranceComponent,
      },
      {
        path: 'home-insurance',
        component: HomeInsuranceComponent,
      },
      {
        path: 'activate-account',
        component: ActivateAccountComponent,
      },


      { path: '**', component: ErrorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
