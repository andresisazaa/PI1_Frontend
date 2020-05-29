import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  open: boolean = true;
  constructor() { }
  changeSidebar(sidebarStatus: boolean) {
    this.open = sidebarStatus;
  }
}
