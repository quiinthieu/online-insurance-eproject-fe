import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivateAccountComponent implements OnInit {
  isLoading = false;
  isDisabled = true;
  credential = {
    token: '',
    activationCode: '',
    requestType: ''
  }
  formRequest: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private credentialService: CredentialService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let token = params['token'];
      let activationCode = params['activation-code'];
      let requestType = params['type'];
      if (token && activationCode && requestType) {
        this.credential = {
          token,
          activationCode,
          requestType
        }

        if (this.credential.requestType === APP_CONST.REQUEST_ACTIVATE_ACCOUNT) {
          this.verifyActivateAccount();
        } else if (this.credential.requestType === APP_CONST.REQUEST_FORGOT_PASSWORD) {
          this.verifyTokenAndActivationCode();
          this.initForm();
        }
      } else {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Invalid Request' });
        this.router.navigate(['login'])
      }
    });
  }

  initForm() {
    this.formRequest = this.formBuilder.group({
      password: '',
    });
  }


  onSubmit() {
    this.isLoading = true;
    let email = atob(this.credential.token);
    const { password } = this.formRequest.value;
    let activationCode = this.credential.activationCode;
    let resetPasswordAccount = {
      email,
      activationCode,
      password
    }
    this.credentialService.resetPassword(resetPasswordAccount).then(data => {
      this.isLoading = false;
      if (data.hasOwnProperty('error')) {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: data.error.detail });
      } else {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Reset Password success' });
      }
    })
    this.router.navigate(['login']);
  }


  verifyTokenAndActivationCode() {
    this.isLoading = true;
    let email = atob(this.credential.token);
    let activationCode = this.credential.activationCode;
    let verifyAccount = {
      email,
      activationCode
    }
    this.credentialService.verifyActivationCodeAndEmail(verifyAccount).then(data => {
      this.isLoading = false;

      if (data.hasOwnProperty('error')) {
        this.router.navigate(['login']);
      } else {
        if (data.email == email && data.activationCode == this.credential.activationCode) {
          return true;
        }
        this.router.navigate(['login']);
      }
    })
  }


  verifyActivateAccount() {
    this.isLoading = true;
    let email = atob(this.credential.token);
    let activationCode = this.credential.activationCode;
    let activateAccount = {
      email,
      activationCode
    }
    this.credentialService.activateAccount(activateAccount).then(data => {
      this.isLoading = false;
      if (data.hasOwnProperty('error')) {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: data.error.detail });
      } else {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Activate account success' });
      }
      this.router.navigate(['login']);
    })
  }
}
