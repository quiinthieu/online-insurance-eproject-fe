import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CustomerComponent } from './customer.component';
import { CustomerPolicyComponent } from './components/customer-policy/policy.component';
import { PolicyService } from '../services/policy.service';
import { CustomerRoutingModule } from './customer-routing.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PolicyComponent } from './components/policy/policy.component';
import { CommonService } from '../services/common.service';
import { PolicyDetailService } from '../services/policy-detail.service';
import { InlineSVGModule } from 'ng-inline-svg';
import { AgentDetailComponent } from './components/agent-detail/agent-detail.component';
import { BranchService } from '../services/branch.service';
@NgModule({
  declarations: [
    CustomerComponent,
    CustomerPolicyComponent,
    PolicyComponent,
    AgentDetailComponent,
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
    BranchService

  ],
  entryComponents: [
    PolicyComponent
  ],
  bootstrap: []
})
export class CustomerModule { }
