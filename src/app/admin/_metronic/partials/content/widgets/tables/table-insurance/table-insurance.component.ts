import { Component, OnInit } from '@angular/core';
import { InsuranceType } from 'src/app/entities/insurance-type.entity';
import { InsuranceTypeService } from 'src/app/services/insurance-type.service';


@Component({
  selector: 'app-table-insurance',
  templateUrl: './table-insurance.component.html',
  styleUrls: ['./table-insurance.component.scss']
})
export class TableInsuranceComponent implements OnInit {

  constructor(private _insuranceTypeService: InsuranceTypeService) {}
  tbInsuntypes: InsuranceType[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countClaim();
    this. _insuranceTypeService.findAll().then(
      res => {
        this.tbInsuntypes = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
 
  countClaim(){
    this._insuranceTypeService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
}
