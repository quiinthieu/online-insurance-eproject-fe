import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { InsuranceType } from '../entities/insurance-type.entity';

@Injectable()
export class InsuranceTypeService {
  private BASE_URL:string =  environment.BASE_URL + '/insurance-type/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'insurance-type-details/' + id)
      .toPromise()
      .then((res) => res as InsuranceType);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-insurance-types')
      .toPromise()
      .then((res) => res as InsuranceType[]);
  }


}
