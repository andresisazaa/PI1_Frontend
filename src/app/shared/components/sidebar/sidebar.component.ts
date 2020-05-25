import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  open: boolean = true;
  @Output() onSidebarChanges = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() { }

  changeSidebarStatus() {
    this.open = !this.open;
    this.onSidebarChanges.emit(this.open);
  }

  navigate(){
    // this.router.navigateByUrl('/candidatos')
  }
}
