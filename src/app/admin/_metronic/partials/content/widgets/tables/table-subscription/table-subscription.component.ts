import { Component, OnInit } from '@angular/core';
import { PremiumType } from 'src/app/entities/premium-type.entity';
import { Role } from 'src/app/entities/role.entity';
import { Subscription } from 'src/app/entities/subscription.entity';
import { RoleService } from 'src/app/services/role.service copy';
import { SubscriptionService } from 'src/app/services/subscription.service';


@Component({
  selector: 'app-table-subscription',
  templateUrl: './table-subscription.component.html',
  styleUrls: ['./table-subscription.component.scss']
})
export class TableSubscriptionComponent implements OnInit {

  constructor(private _subscriptionService: SubscriptionService) {}
  tbSus: Subscription[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countRole();
    this._subscriptionService.findAll().then(
      res => {
        this.tbSus = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
 
  countRole(){
    this._subscriptionService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
}
