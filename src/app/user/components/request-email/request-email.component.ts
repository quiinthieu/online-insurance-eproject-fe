import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';

@Component({
  selector: 'app-request-email',
  templateUrl: './request-email.component.html',
  styleUrls: ['./request-email.component.scss']
})
export class RequestEmailComponent implements OnInit {
  requestType: string = '';
  isDisabled = true;
  isLoading = false;
  formRequest: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private credentialService: CredentialService,
    private router: Router, private messageService: MessageService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initRequestType();
    this.initForm();
  }


  initForm() {
    this.formRequest = this.formBuilder.group({
      email: '',
    });
  }

  initRequestType() {
    this.activatedRoute.params.subscribe(param => {
      let type = param['type'];
      if (type) {
        this.requestType = type;
      } else {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Invalid Request' });
        this.router.navigate(['login']);
      }
    })
  }

  onRequest() {
    const { email } = this.formRequest.value;
    if (this.requestType === APP_CONST.REQUEST_FORGOT_PASSWORD) {
      this.resetPasswordRequest(email);
    } else if (APP_CONST.REQUEST_ACTIVATE_ACCOUNT) {
      this.activateRequest(email);
    }
    this.isDisabled = true;
    window.grecaptcha.reset()
  }

  showResponse(event) {
    console.warn(event)
    if (event.response) {
      this.isDisabled = false;
    }
  }
  activateRequest(email: string) {
    this.isLoading = true;
    this.credentialService.activateRequest({ email }).then(data => {
      this.isLoading = false;
      if (data.hasOwnProperty('error')) {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: data.error.detail });
      } else {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Email has sent to your account' });
      }
    })
    this.router.navigate(['login'])
  }

  resetPasswordRequest(email: string) {
    this.isLoading = true;
    this.credentialService.resetPasswordRequest({ email }).then(data => {
      this.isLoading = false;
      if (data.hasOwnProperty('error')) {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: data.error.detail });
      } else {
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Email has sent to your account' });
      }
    })
    this.router.navigate(['login'])
  }




}
