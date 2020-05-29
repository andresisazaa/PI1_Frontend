import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  open: boolean = true;
  @Output() onSidebarChanges = new EventEmitter<boolean>();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  changeSidebarStatus() {
    this.open = !this.open;
    this.onSidebarChanges.emit(this.open);
  }

  logout() {
    this.authService.signOut();
  }
}
