import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerProfileFormComponent } from '../elements/customer-profile-form/customer-profile-form.component';
import { CustomerProfileHeaderComponent } from '../elements/customer-profile-header/customer-profile-header.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { NewsletterBarComponent } from './newsletter-bar/newsletter-bar.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerProfileFormComponent,
    CustomerProfileHeaderComponent,
    NewsletterBarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
