import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
   
    
    serverStatus=Math.random()>0.5?'online':'offline';
    serverId: number=10;
   
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==='online'?'green':'red';
    }
   
}