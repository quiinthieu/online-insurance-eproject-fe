import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  formLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private credentialService: CredentialService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.formLogin = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onLogin() {
    // this.isLoading = true;
    console.log(this.formLogin.value);
    const { email, password } = this.formLogin.value;
    const loginAccount = {
      email,
      password
    }
    this.credentialService.login(loginAccount).then(data => {
      // this.isLoading = false;
      if (data.hasOwnProperty('error')) {
        this.toastr.error(data.error.detail);
      } else {
        const { accessToken, credential } = data;
        const { id, email, roleName, status, customers } = credential
        const { id: customerId, name: customerName } = customers[0];
        let customer = {
          id: customerId,
          name: customerName
        }
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("credential", JSON.stringify({ id, email, roleName, status, customer }))
        if (roleName == APP_CONST.ROLE_AGENT) {
          this.router.navigate(['admin']);
        } else if (roleName == APP_CONST.ROLE_CUSTOMER) {
          this.router.navigate(['customer']);
        }
      }
    })
  }


}
