import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  closed: boolean = false;
  @Output() onSidebarChanges = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() { }

  changeSidebarStatus() {
    this.closed = !this.closed;
    this.onSidebarChanges.emit(this.closed);
  }

}
