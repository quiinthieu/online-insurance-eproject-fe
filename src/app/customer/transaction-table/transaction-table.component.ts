import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer.entity';
import { PremiumTransactionExtend } from 'src/app/entities/premium-transaction-extend.entity';
import { CustomerService } from 'src/app/services/customer.service';
import { PremiumTransactionService } from 'src/app/services/premium-transaction.service';

@Component({
  selector: 'transaction-table',
  templateUrl: './transaction-table.component.html',
})
export class TransactionTableComponent implements OnInit {
  premiumTransactions : PremiumTransactionExtend[]
  customer : Customer

  constructor(
    private premiumTransactionService: PremiumTransactionService,
    private customerService : CustomerService,
    private datePipe : DatePipe
  ) {}

  ngOnInit(): void {
    this.premiumTransactions = null;
    this.loadPremiumTransactions();
  }

  loadPremiumTransactions() {
    const credential = JSON.parse(localStorage.getItem("credential"));
    this.customerService.detailsbycredentialid(credential.id).then(
      res => {
        console.log("Customer id: "+res.id);
        this.customer = res;
        this.premiumTransactionService.findByCustomerId(this.customer.id).then(
          res2 => {
            console.log(res2);
            this.premiumTransactions = res2;
          },
          error2 => {
            console.log(error2);
          }
        )
      },
      error => {
        console.log(error);
      }
    )
  }
}
