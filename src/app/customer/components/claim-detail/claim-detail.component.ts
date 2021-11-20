import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entities/claim.entity';
import { ClaimService } from 'src/app/services/claim.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.scss']
})
export class ClaimDetailComponent implements OnInit {
  customerPolicyId: number;
  claimDetail: any = {};
  // customerPolicyDetail: any;
  isLoading = false;
  // branchDetail: any;
  constructor(private commonService: CommonService, private claimService: ClaimService) { }

  ngOnInit(): void {
    this.customerPolicyId = this.commonService.passingData['customer-policy-id'];
    console.warn(this.customerPolicyId)
    if (this.customerPolicyId) {
      this.initData();
    }
  }
  initData() {
    this.isLoading = true
    this.claimService.findByCustomerPolicyId(this.customerPolicyId).then(data => {
      this.claimDetail = data;
      this.isLoading = false;
    });
  }


}
