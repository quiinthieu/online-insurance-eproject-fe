import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { CredentialService } from 'src/app/services/credential.service';

@Component({
  selector: 'app-update-credential',
  templateUrl: './update-credential.component.html',
  styleUrls: ['./update-credential.component.scss']
})
export class UpdateCredentialComponent implements OnInit {
  loading = false;
  updateProfile: FormGroup;
  credential: any;
  constructor(
    private cd: ChangeDetectorRef,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private credentialService: CredentialService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    if (this.commonService.passingData['credential-info']) {
      let credential = this.commonService.passingData['credential-info']
      this.credential = credential;
      let { id,
        email,
        password,
        status,
        roleId,
        roleName,
        activationCode,
        branchId } = this.credential
      this.updateProfile = this.formBuilder.group({
        id,
        email: { value: this.credential.email, disabled: true },
        password,
        status,
        roleId,
        roleName,
        activationCode,
        branchId,
      });

    } else {
      this.updateProfile = this.formBuilder.group({
        id: '',
        email: '',
        password: '',
        status: '',
        roleId: '',
        roleName: '',
        activationCode: '',
        branchId: '',
      });
    }

  }

  saveSettings() {
    let credential = this.updateProfile.value;
    console.warn(this.updateProfile)
    if (credential.roleName == 'Customer') {
      credential.roleId = 2;
    } else {
      credential.roleId = 1;
    }
    credential['email'] = this.credential.email
    console.warn(this.updateProfile.value)
    this.credentialService.update(credential.id, credential).then(data => {
      if (data.hasOwnProperty('error')) {
        this.toastr.error('Failed');

      } else {
        console.warn(data)
        this.commonService.passingData['update-credential-info'] = data
        this.toastr.success('Update Success');
      }
    })
  }

}
