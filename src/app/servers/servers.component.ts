import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: `
  //   <app-server> </app-server>
  //   <app-server > </app-server> `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestandoOServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created!';
  }

  onUpdateServerName(event: any) {
    // qualquer uma das formas está correta this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }

}
