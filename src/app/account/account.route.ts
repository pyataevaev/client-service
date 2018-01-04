import {registerRoute} from './register/register.route';
import {Routes} from '@angular/router';

const ACCOUNT_ROUTES = [
  registerRoute
];

export const accountState: Routes = [{
  path: '',
  children: ACCOUNT_ROUTES
}];
