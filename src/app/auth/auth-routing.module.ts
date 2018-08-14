import { LoginPageComponent } from './containers/login-page/login-page.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: 'login', component: LoginPageComponent }];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthRoutingModule { }
