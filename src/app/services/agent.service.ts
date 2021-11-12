import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Agent } from '../entities/agent.entity';
import {Result} from "../entities/result.entity";

@Injectable()
export class AgentService {
  private BASE_URL:string =  environment.BASE_URL + 'agent/' ;

  constructor(private httpClient: HttpClient) {}


  details(id: number) {
    return this.httpClient
      .get(this.BASE_URL + 'agent-details/' + id)
      .toPromise()
      .then((res) => res as Agent);
  }

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-agents')
      .toPromise()
      .then((res) => res as Agent[]);
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then(res => res as Result)
  }


}
