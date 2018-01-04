import {RouterModule} from '@angular/router';
import {accountState} from './account.route';
import {RegisterComponent} from './register/register.component';
import {Register} from './register/register.service';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forRoot(accountState, { useHash: true }),
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
  ],
  providers: [
    Register
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule {}
