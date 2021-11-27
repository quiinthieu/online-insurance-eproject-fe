import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/entities/branch.entity';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-table-branch',
  templateUrl: './table-branch.component.html',
  styleUrls: ['./table-branch.component.scss']
})
export class TableBranchComponent implements OnInit {

  constructor(private _branchService: BranchService, private cd: ChangeDetectorRef) { }
  loading = false;
  tbBranchs: Branch[];
  count: any;
  count1: any;
  ngOnInit(): void {

    this.countBranch();
    this.getBranch();
  }

  getBranch() {
    this.loading = true;
    this._branchService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbBranchs = res;
      },
      error => {
        this.loading = false;
        this.cd.detectChanges();
        console.error(error);
      }


    );
  }

  countBranch() {
    this.loading = true;
    this._branchService.count().then(res => {
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

}
