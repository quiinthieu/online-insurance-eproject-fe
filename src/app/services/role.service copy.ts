import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {
  private BASE_URL:string =  environment.BASE_URL + 'role/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'find-by-id/' + id)
      .toPromise()
      .then((res) => res as Role);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'find-all')
      .toPromise()
      .then((res) => res as Role[]);
  }


}
