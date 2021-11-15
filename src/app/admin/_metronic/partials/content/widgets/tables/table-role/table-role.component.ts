import { Component, OnInit } from '@angular/core';
import { PremiumType } from 'src/app/entities/premium-type.entity';
import { Role } from 'src/app/entities/role.entity';
import { RoleService } from 'src/app/services/role.service copy';


@Component({
  selector: 'app-table-role',
  templateUrl: './table-role.component.html',
  styleUrls: ['./table-role.component.scss']
})
export class TableRoleComponent implements OnInit {

  constructor(private _roleService: RoleService) {}
  tbRoles: Role[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countRole();
    this._roleService.findAll().then(
      res => {
        this.tbRoles = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
 
  countRole(){
    this._roleService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
}
