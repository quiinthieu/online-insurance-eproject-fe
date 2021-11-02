import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { InsuranceType } from '../entities/insurance-type.entity';

@Injectable()
export class InsuranceTypeService {
  private BASE_URL:string =  environment.BASE_URL + 'InsuranceType/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'insuranceType-details/' + id)
      .toPromise()
      .then((res) => res as InsuranceType);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-insuranceTypes')
      .toPromise()
      .then((res) => res as InsuranceType[]);
  }


}
