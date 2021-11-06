import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Message} from "../entities/message.entity";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private BASE_URL : string = environment.BASE_URL + 'message/';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get(this.BASE_URL + 'all-messages').toPromise().then(res => res as Message[]);
  }

  details(id: number) {
    return this.httpClient.get(this.BASE_URL + 'message-details/' + id)
      .toPromise()
      .then(res => res as Message);
  }

  findByStatus(status: boolean) {
    return this.httpClient.get(this.BASE_URL + 'messages/' + status).toPromise().then(res => res as Message[]);
  }
}
