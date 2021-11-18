import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer.entity';
import { PremiumTransactionExtend } from 'src/app/entities/premium-transaction-extend.entity';
import { PremiumTransaction } from 'src/app/entities/premium-transaction.entity';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaypalService } from 'src/app/services/paypal.service';
import { PremiumTransactionService } from 'src/app/services/premium-transaction.service';

@Component({
  selector: 'transaction-table',
  templateUrl: './transaction-table.component.html',
})
export class TransactionTableComponent implements OnInit {
  premiumTransactions : PremiumTransactionExtend[]
  customer : Customer
  isLoading = false;
  customerPolicyId:number;

  constructor(
    private premiumTransactionService: PremiumTransactionService,
    private customerService : CustomerService,
    private datePipe : DatePipe,
    private commonService: CommonService,
    private payPalService: PaypalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading=true;
    this.premiumTransactions = null;
    

    this.customerPolicyId = this.commonService.passingData['customer-policy-id'] || null;
    console.warn(this.customerPolicyId)
    if (this.customerPolicyId) {
      this.loadPremiumTransactionsByCustomerPolicyId();
    }
    else {
      this.loadPremiumTransactions();
    }
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

  loadPremiumTransactionsByCustomerPolicyId() {
    this.premiumTransactionService.findByCustomerPolicyId(this.customerPolicyId).then(data => {
      console.log(data);
      this.premiumTransactions = data;
      this.isLoading = false;
    });
  }

  onShowCheckoutPaypal(premiumTransaction : PremiumTransaction) {
    console.log("preeeee:")
    console.log(premiumTransaction);
    let pTs : PremiumTransaction[] = [premiumTransaction];
    
    this.payPalService.PayPalCheckout(pTs).then(
      res=> {
        this.router.ngOnDestroy();
        window.location.href = res.path;
      },
      error => {
        console.log(error);
      }
    )
  }
}
