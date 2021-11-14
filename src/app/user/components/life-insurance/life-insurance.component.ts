import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { PolicyDetailService } from 'src/app/services/policy-detail.service';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css']
})
export class LifeInsuranceComponent implements OnInit {

  lifePolicy: any = [];
  constructor(private activatedRoute: ActivatedRoute, private policyDetailService: PolicyDetailService, private commonService: CommonService) { }


  ngOnInit() {
    this.initPolicyInsurance();
  }

  initPolicyInsurance() {
    this.activatedRoute.params.subscribe(param => {
      let typeId = param['type'];
      (typeId) && this.policyDetailService.findByInsuranceType(typeId).then(data => this.lifePolicy = data)
    })
  }

  onBuy(policyId: number) {
    this.commonService.passingData['buy-policy'] = true;
    this.commonService.passingData['buy-policy-id'] = policyId;

  }



}
