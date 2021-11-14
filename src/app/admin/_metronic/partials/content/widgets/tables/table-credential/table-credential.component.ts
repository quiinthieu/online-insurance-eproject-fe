import { Component, OnInit } from '@angular/core';
import { Claim } from 'src/app/entities/claim.entity';
import { Credentiall } from 'src/app/entities/credential.entity';
import { CredentialService } from 'src/app/services/credential.service';


@Component({
  selector: 'app-table-credential',
  templateUrl: './table-credential.component.html',
  styleUrls: ['./table-credential.component.scss']
})
export class TableCredentialComponent implements OnInit {

  constructor(private _credentialService: CredentialService) {}
  tbCredentials: Credentiall[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countCredential();
    this. _credentialService.findAll().then(
      res => {
        this.tbCredentials = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
  countCredential(){
    this._credentialService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
  

}
