import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PremiumType } from 'src/app/entities/premium-type.entity';
import { PremiumTypeService } from 'src/app/services/premium-type.service';


@Component({
  selector: 'app-table-premiumtype',
  templateUrl: './table-premiumtype.component.html',
  styleUrls: ['./table-premiumtype.component.scss']
})
export class TablePremiumTypeComponent implements OnInit {

  constructor(private _premiumService: PremiumTypeService, private cd: ChangeDetectorRef) { }
  tbTrantys: PremiumType[];
  count: any;
  count1: any;
  loading = false;
  ngOnInit(): void {
    this.countTrantype();
    this.getTranType();
  }

  getTranType() {
    this.loading = true;
    this._premiumService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbTrantys = res;
      },
      error => {
        this.loading = false;
        this.cd.detectChanges();
        console.error(error);
      }


    );
  }
  countTrantype() {
    this.loading = true;
    this._premiumService.count().then(res => {
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
