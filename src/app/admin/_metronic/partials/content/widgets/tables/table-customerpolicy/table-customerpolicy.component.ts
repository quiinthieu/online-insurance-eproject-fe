import { Component, OnInit } from '@angular/core';
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

  constructor(private _customerPolicyService: CustomerPolicyService) {}
  tbCustomerPolis: CustomerPolicy[];
  count: any;
  count1: any;

  ngOnInit(): void {
    
    this.countCustomer();
    this. _customerPolicyService.findAll().then(
      res => {
        this.tbCustomerPolis= res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
  countCustomer(){
    this._customerPolicyService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
      console.log(error);
    });
  }
 
}
