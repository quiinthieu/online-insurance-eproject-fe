import { Component, OnInit } from '@angular/core';
import { PremiumType } from 'src/app/entities/premium-type.entity';
import { PremiumTypeService } from 'src/app/services/premium-type.service';


@Component({
  selector: 'app-table-premiumtype',
  templateUrl: './table-premiumtype.component.html',
  styleUrls: ['./table-premiumtype.component.scss']
})
export class TablePremiumTypeComponent implements OnInit {

  constructor(private _premiumService: PremiumTypeService) {}
  tbTrantys: PremiumType[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countTrantype();
    this._premiumService.findAll().then(
      res => {
        this.tbTrantys = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
 
  countTrantype(){
    this._premiumService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
}
