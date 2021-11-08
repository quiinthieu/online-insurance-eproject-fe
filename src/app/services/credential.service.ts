import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpObservablesService } from './http-method/http-observables.service';

@Injectable()
export class CredentialService {
  private BASE_URL: string = environment.BASE_URL + '/credential';

  constructor(private httpMethod: HttpObservablesService, private router: Router) { }


  login(body: any) {
    return this.httpMethod.postUrl(`${this.BASE_URL}/login`, body);
  }

  logout() {
    localStorage.removeItem('credential');
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }



}
