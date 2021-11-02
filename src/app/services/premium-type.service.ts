import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PremiumType } from '../entities/premium-type.entity';

@Injectable()
export class PremiumTypeService {
  private BASE_URL:string =  environment.BASE_URL + 'PremiumType/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'premiumType-details/' + id)
      .toPromise()
      .then((res) => res as PremiumType);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-premiumTypes')
      .toPromise()
      .then((res) => res as PremiumType[]);
  }


}
