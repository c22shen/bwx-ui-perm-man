import { AuthRoutingModule } from './auth-routing.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthGuard } from './services/auth-guard.service';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthGuard],
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthRoutingModule
  ],
})
export class RootAuthModule {}
