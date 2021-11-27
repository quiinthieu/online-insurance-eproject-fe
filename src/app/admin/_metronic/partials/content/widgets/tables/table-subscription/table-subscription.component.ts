import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private _subscriptionService: SubscriptionService, private cd: ChangeDetectorRef) { }
  tbSus: Subscription[];
  count: any;
  count1: any;

  loading = false;
  ngOnInit(): void {
    this.countRole();
    this.getSub();
  }

  getSub() {
    this.loading = true;

    this._subscriptionService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbSus = res;
      },
      error => {
        this.loading = false;
        this.cd.detectChanges();
        console.error(error);
      }


    );
  }
  countRole() {
    this.loading = true;

    this._subscriptionService.count().then(res => {
      this.loading = false;
      this.cd.detectChanges();
      this.count = res;
      this.count1 = this.count.result;
    },
      error => {
        this.loading = false;
        this.cd.detectChanges();
        console.log(error);
      });
  }
}
