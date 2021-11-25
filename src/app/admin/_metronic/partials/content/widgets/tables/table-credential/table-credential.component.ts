import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UpdateCredentialComponent } from 'src/app/admin/components/update-credential/update-credential.component';
import { Claim } from 'src/app/entities/claim.entity';
import { Credentiall } from 'src/app/entities/credential.entity';
import { CommonService } from 'src/app/services/common.service';
import { CredentialService } from 'src/app/services/credential.service';
import { find, map } from 'lodash';

@Component({
  selector: 'app-table-credential',
  templateUrl: './table-credential.component.html',
  styleUrls: ['./table-credential.component.scss']
})
export class TableCredentialComponent implements OnInit {

  constructor(
    private _credentialService: CredentialService,
    private cd: ChangeDetectorRef,
    private dialogService: DialogService, private commonService: CommonService
  ) { }
  tbCredentials: Credentiall[];
  count: any;
  count1: any;
  refCredential: DynamicDialogRef;

  loading = false;
  ngOnInit(): void {
    this.countCredential();
    this.getCredential();
  }
  // ngDoCheck() {
  //   console.warn("a")
  //   // this.refCredential.onDestroy.subscribe()

  // }


  openDialogUpdateCredential(credentail: any) {
    this.refCredential = this.dialogService.open(UpdateCredentialComponent, {
      header: 'Credential Info',
      width: '60%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.commonService.passingData['credential-info'] = credentail;

    this.refCredential.onClose.subscribe(() => {
      console.warn("close")
      if (this.commonService.passingData['update-credential-info']) {
        let updateCre = this.commonService.passingData['update-credential-info']

        this.tbCredentials = map(this.tbCredentials, cre => {
          if (cre.id == updateCre.id) {
            return Object.assign({}, cre, {
              status: updateCre.status,
              roleId: updateCre.roleId,
              roleName: updateCre.roleName
            })
          } else {
            return cre
          }

        })
        console.warn(this.tbCredentials);
        this.ngOnInit();

      }
    })
  }

  getCredential() {
    this.loading = true;

    this._credentialService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbCredentials = res;
      },
      error => {
        this.loading = false;
        this.cd.detectChanges();

        console.error(error);
      }


    );
  }
  countCredential() {
    this.loading = true;

    this._credentialService.count().then(res => {
      this.loading = false;
      this.cd.detectChanges();
      this.count = res;
      this.count1 = this.count.result;
    },
      error => {
        this.loading = false;
        this.cd.detectChanges();

        console.log(error);
      });
  }
  ngOnDestroy() {
    if (this.refCredential) {
      this.refCredential.close();
    }
  }

}
