import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Branch } from '../entities/branch.entity';

@Injectable()
export class BranchService {
  private BASE_URL:string =  environment.BASE_URL + 'branch/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'branch-details/' + id)
      .toPromise()
      .then((res) => res as Branch);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-branches')
      .toPromise()
      .then((res) => res as Branch[]);
  }


}
