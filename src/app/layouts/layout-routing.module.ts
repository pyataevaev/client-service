import {navbarRoute} from '../app.route';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {errorRoute} from './error/error.route';

const LAYOUT_ROUTES = [
  navbarRoute,
  ...errorRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {}
