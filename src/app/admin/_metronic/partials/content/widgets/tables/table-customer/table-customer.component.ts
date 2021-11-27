import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.scss']
})
export class TableCustomerComponent implements OnInit {

  constructor(private _customerService: CustomerService, private cd: ChangeDetectorRef) { }
  tbCustomers: Customer[];
  count: any;
  count1: any;
  loading = false;
  p: number = 1;
  counter: number = 8;
  ngOnInit(): void {

    this.countCustomer();
    this.getCustomer();
  }

  getCustomer() {

    this.loading = true;
    this._customerService.findAll().then(
      res => {

        this.loading = false;
        this.cd.detectChanges();
        this.tbCustomers = res;
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
    this._customerService.count().then(res => {
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
