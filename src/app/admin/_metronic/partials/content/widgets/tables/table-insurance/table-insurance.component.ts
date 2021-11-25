import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdateInsuranceTypeComponent } from 'src/app/admin/components/update-insurance-type/update-insurance-type.component';
import { InsuranceType } from 'src/app/entities/insurance-type.entity';
import { CommonService } from 'src/app/services/common.service';
import { CredentialService } from 'src/app/services/credential.service';
import { InsuranceTypeService } from 'src/app/services/insurance-type.service';
import { find, map } from 'lodash';


@Component({
  selector: 'app-table-insurance',
  templateUrl: './table-insurance.component.html',
  styleUrls: ['./table-insurance.component.scss']
})
export class TableInsuranceComponent implements OnInit {

  constructor(private _insuranceTypeService: InsuranceTypeService,
    private _credentialService: CredentialService,
    private cd: ChangeDetectorRef,
    private dialogService: DialogService, private commonService: CommonService
  ) { }
  tbInsuntypes: InsuranceType[];
  count: any;
  count1: any;
  loading = false;
  refInsuranceType: DynamicDialogRef;

  ngOnInit(): void {
    this.countClaim();
    this.getInsurance();
  }

  openDialogCreateInsuranceType() {
    this.refInsuranceType = this.dialogService.open(UpdateInsuranceTypeComponent, {
      header: 'Create Insurance Type',
      width: '60%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['insurance-type-action'] = 'create';

    this.refInsuranceType.onClose.subscribe(() => {
      console.warn("close")
      if (this.commonService.passingData['create-insurance-type-info']) {
        let updateCre = this.commonService.passingData['create-insurance-type-info']
        this.tbInsuntypes.push(updateCre)
        console.warn(this.tbInsuntypes);
        this.ngOnInit();
      }
    })
  }

  openDialogUpdateInsuranceType(insuranceType: any) {
    this.refInsuranceType = this.dialogService.open(UpdateInsuranceTypeComponent, {
      header: 'Update Insurance Type',
      width: '60%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['insurance-type-action'] = 'update';
    this.commonService.passingData['insurance-type-info'] = insuranceType;

    this.refInsuranceType.onClose.subscribe(() => {
      console.warn("close")
      if (this.commonService.passingData['update-insurance-type-info']) {
        let updateCre = this.commonService.passingData['update-insurance-type-info']

        this.tbInsuntypes = map(this.tbInsuntypes, cre => {
          if (cre.id == updateCre.id) {
            return Object.assign({}, cre, {
              name: updateCre.name,
              description: updateCre.description,
            })
          } else {
            return cre
          }

        })
        console.warn(this.tbInsuntypes);
        this.ngOnInit();

      }
    })
  }

  ngOnDestroy() {
    if (this.refInsuranceType) {
      this.refInsuranceType.close();
    }
  }


  getInsurance() {
    this.loading = true;
    this._insuranceTypeService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbInsuntypes = res;
      },
    );
  }



  countClaim() {
    this.loading = true;
    this._insuranceTypeService.count().then(res => {
      this.loading = false;

      this.count = res;
      this.count1 = this.count.result;
    },
      error => {
        this.loading = false;

        console.log(error);
      });
  }
}
