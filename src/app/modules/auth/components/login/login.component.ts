import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => user);
  }

  login() {
    this.authService.googleLogin();
  }

}
