import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {
  private BASE_URL:string =  environment.BASE_URL + '/role/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'find-by-id/' + id)
      .toPromise()
      .then((res) => res as Role);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-roles')
      .toPromise()
      .then((res) => res as Role[]);
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then((res) => res as number);
  }

}
