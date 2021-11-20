import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/services/common.service';
import { PolicyService } from 'src/app/services/policy.service';
import { ClaimDetailComponent } from '../claim-detail/claim-detail.component';
import { PolicyComponent } from '../policy/policy.component';

@Component({
  selector: 'app-customer-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class CustomerPolicyComponent implements OnInit {
  isLoading = false;
  policies: any = [];
  refPolicy: DynamicDialogRef;
  refAgent: DynamicDialogRef;
  constructor(private policyService: PolicyService, private dialogService: DialogService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.isLoading = true;
    let credential = JSON.parse(localStorage.getItem('credential'))
    this.policyService.findByCustomerId(credential.customer.id).then(data => {
      this.policies = data;
      this.isLoading = false
    });
  }

  onOpenTransDetail() {

  }


  onShowPolicyDialog(policyDetailId: number) {
    this.refPolicy = this.dialogService.open(PolicyComponent, {
      header: 'Policy Details',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['policy-detail'] = policyDetailId;

  }
  onShowClaimDialog(customerPolicyId: number) {
    this.refAgent = this.dialogService.open(ClaimDetailComponent, {
      header: 'Claim Info',
      width: '30%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
    console.log("Customer policy: "+customerPolicyId);
    this.commonService.passingData['customer-policy-id'] = customerPolicyId;
  }

  ngOnDestroy() {
    if (this.refPolicy) {
      this.refPolicy.close();
    } else if (this.refAgent) {
      this.refAgent.close();
    }
  }

}
