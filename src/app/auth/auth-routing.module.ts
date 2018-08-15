import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

const routes: Routes = [{ path: 'login', component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), EffectsModule.forFeature([AuthEffects])],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
