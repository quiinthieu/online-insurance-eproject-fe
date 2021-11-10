import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private credentialService: CredentialService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      username: '',
      credentialId: ''
    });
  }

  onRegister() {
    const { credentialId, email, password, username } = this.registerForm.value;
    const registerAccount = {
      credentialId, email, password, username
    }
    this.credentialService.register(registerAccount).then(
      data => {
        if (data.hasOwnProperty('error')) {
          this.messageService.add({ severity: 'danger', summary: 'Error', detail: data.error.detail });
        } else {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: APP_CONST.REGISTER_SUCCESS });
          this.router.navigate(['login']);
        }
      },

    )
  }



}
