import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerPolicy } from 'src/app/entities/customer-policy.entity';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerPolicyService } from 'src/app/services/customer-policy.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-table-customerpolicy',
  templateUrl: './table-customerpolicy.component.html',
  styleUrls: ['./table-customerpolicy.component.scss']
})
export class TableCustomerPolicyComponent implements OnInit {

  constructor(private _customerPolicyService: CustomerPolicyService,
    private cd: ChangeDetectorRef) { }
  tbCustomerPolis: CustomerPolicy[];
  count: any;
  count1: any;
  loading = false;
  p: number = 1;
  counter: number = 8;

  ngOnInit(): void {

    this.countCustomer();
    this.getCustomerPolicy();
  }

  getCustomerPolicy() {
    this.loading = true;
    this._customerPolicyService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbCustomerPolis = res;
      },
      error => {
        this.loading = false;
        this.cd.detectChanges();
        console.error(error);
      }


    );
  }
  countCustomer() {
    this.loading = true;
    this._customerPolicyService.count().then(res => {
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
