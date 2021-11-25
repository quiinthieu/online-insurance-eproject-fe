import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { CredentialService } from 'src/app/services/credential.service';
import { InsuranceTypeService } from 'src/app/services/insurance-type.service';

@Component({
  selector: 'app-update-insurance-type',
  templateUrl: './update-insurance-type.component.html',
  styleUrls: ['./update-insurance-type.component.scss']
})
export class UpdateInsuranceTypeComponent implements OnInit {
  loading = false;
  updateProfile: FormGroup;
  credential: any;
  insuranceType: any;
  constructor(
    private _insuranceTypeService: InsuranceTypeService,
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
    if (this.commonService.passingData['insurance-type-info'] && this.commonService.passingData['insurance-type-action'] == 'update') {
      let insuranceType = this.commonService.passingData['insurance-type-info']
      this.insuranceType = insuranceType;
      console.warn(this.insuranceType)
      let {
        id,
        name,
        description,

      } = this.insuranceType
      this.updateProfile = this.formBuilder.group({
        id,
        name,
        description,
      });

    } else {
      this.updateProfile = this.formBuilder.group({
        name: '',
        description: '',

      });
    }

  }

  saveSettings() {
    let item = this.updateProfile.value;
    if (this.commonService.passingData['insurance-type-action'] == 'update') {
      this._insuranceTypeService.update(item.id, item).then(data => {
        if (data.hasOwnProperty('error')) {
          this.toastr.error('Failed');

        } else {
          console.warn(data)
          this.commonService.passingData['update-insurance-type-info'] = data
          this.toastr.success('Update Success');
        }
      })
    } else {
      this._insuranceTypeService.create(item).then(data => {
        if (data.hasOwnProperty('error')) {
          this.toastr.error('Failed');

        } else {
          console.warn(data)
          this.commonService.passingData['create-insurance-type-info'] = data
          this.toastr.success('Create Success');
        }
      })
    }

    // this.credentialService.update(credential.id, credential).then(data => {
    //   if (data.hasOwnProperty('error')) {
    //     this.toastr.error('Failed');

    //   } else {
    //     console.warn(data)
    //     this.commonService.passingData['update-credential-info'] = data
    //     this.toastr.success('Update Success');
    //   }
    // })
  }

}
