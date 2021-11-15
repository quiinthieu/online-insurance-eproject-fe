import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PremiumTransactionExtend } from '../entities/premium-transaction-extend.entity';
import { PremiumTransaction } from '../entities/premium-transaction.entity';

@Injectable()
export class PremiumTransactionService {
  private BASE_URL:string =  environment.BASE_URL + '/premium-transaction/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'premiumTransaction-details/' + id)
      .toPromise()
      .then((res) => res as PremiumTransaction);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-premium-transactions')
      .toPromise()
      .then((res) => res as PremiumTransaction[]);
  }

  findByCustomerId(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'premium-transactions-by-customerid/'+id)
      .toPromise()
      .then((res) => res as PremiumTransactionExtend[]);
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then((res) => res as number);
  }

}
