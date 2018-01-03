import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    // reset login status
  }

  login() {
    this.loginService.login({
      username: this.username,
      password: this.password
    }).then(() => {
      this.authenticationError = false;
      console.log('login success');
    }).catch(() => {
      this.authenticationError = true;
    });
  }

}
