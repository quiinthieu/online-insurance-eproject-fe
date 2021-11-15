import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../entities/customer.entity';
import { Subscription } from '../entities/subscription.entity';
import { Result } from '../entities/result.entity';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private BASE_URL: string = environment.BASE_URL + '/subscription/';
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient
      .get(this.BASE_URL + 'all-subscriptions')
      .toPromise()
      .then((res) => res as Subscription[]);
  }

  unsubscribe(email: string) {
    return this.httpClient
      .get(this.BASE_URL + 'all-subscriptions')
      .toPromise()
      .then((res) => res as Result);
  }

  count() {
    return this.httpClient
      .get(this.BASE_URL + 'count')
      .toPromise()
      .then((res) => res as number);
  }
}
