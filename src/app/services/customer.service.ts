import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomerService {
  private BASE_URL:string =  environment.BASE_URL + '/customer/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'customer-details/' + id)
      .toPromise()
      .then((res) => res as Customer);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-customers')
      .toPromise()
      .then((res) => res as Customer[]);
  }

  detailsbycredentialid(id:number) {
    return this.httpClient
      .get(this.BASE_URL + 'customer-details-by-credential/' + id)
      .toPromise()
      .then((res) => res as Customer);
  }

  updateProfile(id : number , customerToUpdate : Customer) {
    return this.httpClient
      .put(this.BASE_URL + 'customer-update/' + id,customerToUpdate)
      .toPromise()
      .then((res) => res as Customer);
  }

}
