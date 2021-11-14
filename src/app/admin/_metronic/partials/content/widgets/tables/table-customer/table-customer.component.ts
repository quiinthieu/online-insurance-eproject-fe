import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-table-customer',
  templateUrl: './table-customer.component.html',
  styleUrls: ['./table-customer.component.scss']
})
export class TableCustomerComponent implements OnInit {

  constructor(private _customerService: CustomerService) {}
  tbCustomers: Customer[];
  count: any;
  count1: any;

  ngOnInit(): void {
    
    this.countCustomer();
    this. _customerService.findAll().then(
      res => {
        this.tbCustomers = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
  countCustomer(){
    this._customerService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
      console.log(error);
    });
  }
 
}
