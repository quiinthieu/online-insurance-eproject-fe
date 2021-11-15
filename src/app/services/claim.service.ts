import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ClaimExtend } from '../entities/claim-extend.entity';
import { Claim } from '../entities/claim.entity';

@Injectable()
export class ClaimService {
  private BASE_URL:string =  environment.BASE_URL + '/claim/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'claim-details/' + id)
      .toPromise()
      .then((res) => res as Claim);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-claims')
      .toPromise()
      .then((res) => res as Claim[]);
  }
 
  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then(res => res as number)
  }

  findByCustomerId(customerId:number) {
    return this.httpClient
    .get(this.BASE_URL + 'claims-by-customer-id/'+customerId)
    .toPromise()
    .then((res)=> res as ClaimExtend[]);
  }
}
