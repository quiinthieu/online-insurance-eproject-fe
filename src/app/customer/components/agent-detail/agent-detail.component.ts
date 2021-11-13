import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {
  customerPolicyDetail: any;
  isLoading = false;
  branchDetail: any;
  constructor(private commonService: CommonService, private branchService: BranchService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.customerPolicyDetail = this.commonService.passingData['customer-policy-detail'] || null;
    console.warn(this.customerPolicyDetail)
    if (this.customerPolicyDetail) {
      this.initData();
    }
  }
  initData() {
    this.branchService.findById(this.customerPolicyDetail.branchId).then(data => {
      this.branchDetail = data;
      this.isLoading = false;
    });
  }


}
