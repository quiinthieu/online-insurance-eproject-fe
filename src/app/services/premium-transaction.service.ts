import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PremiumTransaction } from '../entities/premium-transaction.entity';

@Injectable()
export class PremiumTransactionService {
  private BASE_URL:string =  environment.BASE_URL + 'PremiumTransaction/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'premiumTransaction-details/' + id)
      .toPromise()
      .then((res) => res as PremiumTransaction);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-premiumTransactions')
      .toPromise()
      .then((res) => res as PremiumTransaction[]);
  }


}
