import './vendor.ts';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {Principal} from './auth/principal.service';
import {AuthServerProvider} from './auth/auth-jwt.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {LayoutRoutingModule} from './layouts/layout-routing.module';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {ErrorComponent} from './layouts/error/error.component';
import {FooterComponent} from './layouts/footer/footer.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {AccountModule} from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    FooterComponent,
    HasAnyAuthorityDirective
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LayoutRoutingModule,
    NgbModule.forRoot(),
    CommonModule,
    AccountModule
  ],
  providers: [Principal, AuthServerProvider],
  bootstrap: [MainComponent],
  exports: [
    HasAnyAuthorityDirective
  ]
})
export class AppModule { }
