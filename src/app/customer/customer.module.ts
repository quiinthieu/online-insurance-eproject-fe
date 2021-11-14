import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ClaimService } from '../services/claim.service';
import { CustomerService } from '../services/customer.service';
import { PremiumTransactionService } from '../services/premium-transaction.service';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { ProfileDetailsComponent } from './update-profile/forms/profile-details/profile-details.component';
import { UpdateProfileComponent } from './update-profile/settings.component';

@NgModule({
  declarations: [
    CustomerComponent,
    UpdateProfileComponent,
    ProfileDetailsComponent,
    ProfileComponent,
    TransactionTableComponent,
    ClaimTableComponent
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
    PremiumTransactionService,
    DatePipe,
    ClaimService
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
