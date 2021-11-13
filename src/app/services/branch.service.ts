import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Branch } from '../entities/branch.entity';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class BranchService {
  private BASE_URL: string = environment.BASE_URL + '/branch';

  constructor(private httpMethod: HttpObservablesService) { }

  findById(id: number) {
    return this.httpMethod.getUrl(`${this.BASE_URL}/branch-details/${id}`)
  }

}
