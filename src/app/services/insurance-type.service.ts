import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { InsuranceType } from '../entities/insurance-type.entity';
import {HttpObservablesService} from "./http-method/http-observables.service";

@Injectable()
export class InsuranceTypeService {
  private BASE_URL:string =  environment.BASE_URL + '/insurance-type/' ;

  constructor(private httpClient: HttpObservablesService) {}


  details(id: number) {
    return this.httpClient
      .getUrl(this.BASE_URL + 'insurance-type-details/' + id);
  }

  findAll() {
    return this.httpClient
      .getUrl(this.BASE_URL + 'all-insurance-types');
  }


}
