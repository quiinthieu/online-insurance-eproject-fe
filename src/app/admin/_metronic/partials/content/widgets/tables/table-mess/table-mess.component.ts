import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/entities/message.entity';
import { Messages } from 'src/app/entities/messages.entity';
import { MessageService } from 'src/app/services/message.service';



@Component({
  selector: 'app-table-mess',
  templateUrl: './table-mess.component.html',
  styleUrls: ['./table-mess.component.scss']
})
export class TableMessComponent implements OnInit {

  constructor(private _messageService: MessageService) {}
  tbMess: Messages[];
  count: any;
  count1: any;

  ngOnInit(): void {
    this.countClaim();
    this. _messageService.findAlls().then(
      res => {
        this.tbMess = res;
      },
      error =>{
        console.error(error);
      }
     
      
    );
  }
 
  countClaim(){
    this._messageService.count().then(res=>{
      this.count = res;
      this.count1 = this.count.result;
    },
    error=>{
    console.log(error);
    });
  }
}
