import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/entities/branch.entity';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-table-branch',
  templateUrl: './table-branch.component.html',
  styleUrls: ['./table-branch.component.scss']
})
export class TableBranchComponent implements OnInit {

  constructor(private _branchService: BranchService) {}
  tbBranchs: Branch[];
  count: any;
  count1: any;
  ngOnInit(): void {

    this.countBranch();
    this. _branchService.findAll().then(
      res => {
        this.tbBranchs = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }

  countBranch(){
    this._branchService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }

}
