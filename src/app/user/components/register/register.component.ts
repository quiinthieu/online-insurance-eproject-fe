import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CredentialService } from 'src/app/services/credential.service';
import { APP_CONST } from '../../../constants';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private credentialService: CredentialService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      username: ''
    });
  }

  onRegister() {
    this.isLoading = true;
    const { email, password, username } = this.registerForm.value;
    const registerAccount = {
      email, password, username
    }
    this.credentialService.register(registerAccount).then(
      data => {
        if (data.hasOwnProperty('error')) {
          this.toastr.error(data.error.detail);
        } else {
          this.toastr.success(APP_CONST.REGISTER_SUCCESS);
        }
        this.isLoading = false;
        this.router.navigate(['login']);
      },

    )
  }



}
