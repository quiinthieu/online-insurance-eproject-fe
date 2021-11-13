import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { ProfileDetailsComponent } from './update-profile/forms/profile-details/profile-details.component';
import { UpdateProfileComponent } from './update-profile/settings.component';

@NgModule({
  declarations: [
    CustomerComponent,
    UpdateProfileComponent,
    ProfileDetailsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    CustomerService,
    DatePipe
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
