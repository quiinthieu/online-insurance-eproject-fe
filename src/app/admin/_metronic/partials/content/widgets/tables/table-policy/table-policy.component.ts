import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer.entity';
import { Policy } from 'src/app/entities/policy.entity';
import { PolicyDetailService } from 'src/app/services/policy-detail.service';


@Component({
  selector: 'app-table-policy',
  templateUrl: './table-policy.component.html',
  styleUrls: ['./table-policy.component.scss']
})
export class TablePolicyComponent implements OnInit {

  constructor(private _policyService: PolicyDetailService) {}
  tbPolis: Policy[];
  count: any;
  count2: any;

  ngOnInit(): void {
    
    this.countPolicy();
    this._policyService.findAll().then(
      res => {
        this.tbPolis = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
  countPolicy(){
    this._policyService.count().then(res=>{
      this.count = res;
      this.count2 = this.count.result;
    },
    error=>{
      console.log(error);
    });
  }
 
}
