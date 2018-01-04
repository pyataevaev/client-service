import {registerRoute} from './register/register.route';
import {Routes} from '@angular/router';
import {loginRoute} from './login/login.route';

const ACCOUNT_ROUTES = [
  registerRoute,
  loginRoute
];

export const accountState: Routes = [{
  path: '',
  children: ACCOUNT_ROUTES
}];
