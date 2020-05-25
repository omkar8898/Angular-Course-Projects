import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowedServer:boolean=false;
 serverCreateStatus='No server was created';
 serverName='testServer';
 servers=['testServer1','testServer2'];
 display=false;
  constructor(){
    setTimeout(()=>{
 this.allowedServer=true;
    },2000);
}

onCreateServer(){
  this.display=true;
  this.servers.push(this.serverName)
this.serverCreateStatus='Server was created successfully with name ' + this.serverName;
}

  ngOnInit(): void {
  }

 
}
