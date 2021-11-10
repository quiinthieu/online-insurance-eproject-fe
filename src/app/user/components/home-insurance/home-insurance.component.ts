import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/entities/policy.entity';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-home-insurance',
  templateUrl: './home-insurance.component.html',
  styleUrls: ['./home-insurance.component.css']
})
export class HomeInsuranceComponent implements OnInit {

  constructor(private _policyService:PolicyService) { }

  homePolicy : Policy[];

  ngOnInit() {
    this.findAllByInsuranceId(4);
  }
  findAllByInsuranceId(id:number) {
    this._policyService.findAllByInsuranceType(id).then (
      res => {
        console.log(res);
        for(let i =0;i<res.length;i++) {
          res[i].amount = Math.round(res[i].amount/12);
        }
        this.homePolicy = res;
      },
      error => {
        return null;
      }
    );
  }
}
