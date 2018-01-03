import {Injectable} from '@angular/core';
import {AuthServerProvider} from '../auth/auth-jwt.service';
import {Principal} from '../auth/principal.service';
import {Observable} from 'rxjs/Observable';
import {SERVER_API_URL} from '../app.constants';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(
    private principal: Principal,
    private authServerProvider: AuthServerProvider,
    private http: HttpClient
  ) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
      this.authServerProvider.login(credentials).subscribe((data) => {
      }, (err) => {
        this.logout();
        reject(err);
      });
    });
  }

  login2(credentials): Observable<any> {
    const data = {
      username: credentials.username,
      password: credentials.password,
      rememberMe: credentials.rememberMe
    };
    return this.http.post(SERVER_API_URL + 'api/authenticate', data);
  }

  loginWithToken(jwt, rememberMe) {
    return this.authServerProvider.loginWithToken(jwt, rememberMe);
  }

  logout() {
    if (this.principal.isAuthenticated()) {
      this.authServerProvider.logout().subscribe();
    }
    this.principal.authenticate(null);
  }
}
