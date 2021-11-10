import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/entities/policy.entity';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-motor-insurance',
  templateUrl: './motor-insurance.component.html',
  styleUrls: ['./motor-insurance.component.css']
})
export class MotorInsuranceComponent implements OnInit {

  constructor(private _policyService:PolicyService) { }
  motorPolicy : Policy[];
  ngOnInit() {
    this.findAllByInsuranceId(3);
  }
  findAllByInsuranceId(id:number) {
    this._policyService.findAllByInsuranceType(id).then (
      res => {
        console.log(res);
        for(let i =0;i<res.length;i++) {
          res[i].amount = Math.round(res[i].amount/12);
        }
        this.motorPolicy = res;
      },
      error => {
        return null;
      }
    );
  }
}
