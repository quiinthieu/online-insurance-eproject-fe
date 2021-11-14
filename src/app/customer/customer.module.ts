import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BranchService } from '../services/branch.service';
import { CommonService } from '../services/common.service';
import { CustomerService } from '../services/customer.service';
import { PolicyDetailService } from '../services/policy-detail.service';
import { PolicyService } from '../services/policy.service';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profilecomponent';
import { ProfileDetailsComponent } from './update-profile/forms/profile-details/profile-details.component';
import { UpdateProfileComponent } from './update-profile/settings.component';
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerPolicyComponent,
    PolicyComponent,
    AgentDetailComponent,
    UpdateProfileComponent,
    ProfileComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    DynamicDialogModule,
    InlineSVGModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    CustomerService,
    PolicyService,
    DialogService,
    CommonService,
    PolicyDetailService,
    BranchService,
    DatePipe
  ],
  entryComponents: [
    PolicyComponent
  ],
  bootstrap: []
})
export class CustomerModule { }
