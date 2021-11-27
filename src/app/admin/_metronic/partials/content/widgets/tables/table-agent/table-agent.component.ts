import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/entities/agent.entity';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-table-agent',
  templateUrl: './table-agent.component.html',
  styleUrls: ['./table-agent.component.scss']
})
export class TableAgentComponent implements OnInit {

  constructor(private _agentService: AgentService, private cd: ChangeDetectorRef) { }
  tbAgents: Agent[];
  count: any;
  count1: any;
  loading = false;
  ngOnInit(): void {

    this.countAgent();
    this.getAgent();
  }

  getAgent() {
    this.loading = true;
    this._agentService.findAll().then(
      res => {
        this.loading = false;
        this.cd.detectChanges();
        this.tbAgents = res;
      },
      error => {
        this.loading = false;
        this.cd.detectChanges();
        console.error(error);
      }
    );
  }
  countAgent() {
    this.loading = true;

    this._agentService.count().then(res => {
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
