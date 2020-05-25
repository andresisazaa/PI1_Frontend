import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open: boolean = true;

  changeSidebar(sidebarStatus: boolean) {
    this.open = sidebarStatus;
  }
}