import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entities/claim.entity';
import { ClaimService } from 'src/app/services/claim.service';


@Component({
  selector: 'app-table-claim',
  templateUrl: './table-claim.component.html',
  styleUrls: ['./table-claim.component.scss']
})
export class TableClaimComponent implements OnInit {

  constructor(private _claimService: ClaimService) {}
  tbClaims: Claim[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countClaim();
    this. _claimService.findAll().then(
      res => {
        this.tbClaims = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
 
  countClaim(){
    this._claimService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
}
