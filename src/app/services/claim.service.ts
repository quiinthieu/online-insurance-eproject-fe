import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Claim } from '../entities/claim.entity';

@Injectable()
export class ClaimService {
  findByCustomerId(id: number) {
    throw new Error('Method not implemented.');
  }
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

}
