import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CustomerPolicy } from '../entities/customer-policy.entity';


@Injectable()
export class CustomerPolicyService {
  private BASE_URL:string =  environment.BASE_URL + '/customer-policy/' ;

  constructor(private httpClient: HttpClient) {}


  

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-customer-policies')
      .toPromise()
      .then((res) => res as CustomerPolicy[]);
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then(res => res as number)
  }


}
