import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closed: boolean = false;

  changeSidebar(sidebarStatus: boolean) {
    this.closed = sidebarStatus;
  }
}