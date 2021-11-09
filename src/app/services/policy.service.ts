import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Policy } from '../entities/policy.entity';

@Injectable()
export class PolicyService {
  private BASE_URL:string =  environment.BASE_URL + '/policy/' ;

  constructor(private httpClient: HttpClient) {}


  findAllByInsuranceType(id:number) {
    return this.httpClient
      .get(this.BASE_URL + 'policy-by-insurancetype/'+id)
      .toPromise()
      .then((res) => res as Policy[]);
  }
}
