import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/entities/agent.entity';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-table-agent',
  templateUrl: './table-agent.component.html',
  styleUrls: ['./table-agent.component.scss']
})
export class TableAgentComponent implements OnInit {

  constructor(private _agentService: AgentService) {}
  tbAgents: Agent[];
  count: any;
  count1: any;

  ngOnInit(): void {
    
    this.countAgent();
    this. _agentService.findAll().then(
      res => {
        this.tbAgents = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
  countAgent(){
    this._agentService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
      console.log(error);
    });
  }
 
}
