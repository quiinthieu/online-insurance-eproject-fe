import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/entities/policy.entity';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-life-insurance',
  templateUrl: './life-insurance.component.html',
  styleUrls: ['./life-insurance.component.css']
})
export class LifeInsuranceComponent implements OnInit {

  constructor( private _policyService:PolicyService) { }
  lifePolicy : Policy[]

  ngOnInit() {
    this.findAllByInsuranceId(1);
  }

  findAllByInsuranceId(id:number) {
    this._policyService.findAllByInsuranceType(id).then (
      res => {
        console.log(res);
        for(let i =0;i<res.length;i++) {
          res[i].amount = Math.round(res[i].amount/12);
        }
        this.lifePolicy = res;
      },
      error => {
        return null;
      }
    );
  }

}
