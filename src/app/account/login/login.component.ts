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
  checkLogin: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    // reset login status
    this.checkLogin = true;
  }

  login() {

    this.loginService.login2({
      username: this.username,
      password: this.password
    }).subscribe(
      response => {
        this.checkLogin = false;
        this.authenticationError = false;
        console.log('login success');
      },
      error => {
        this.authenticationError = true;
      });

    /*
    this.loginService.login({
      username: this.username,
      password: this.password
    }).then(() => {
      this.checkLogin = false;
      this.authenticationError = false;
      console.log('login success');
    }).catch(() => {
      this.authenticationError = true;
    });
    */
  }

}
