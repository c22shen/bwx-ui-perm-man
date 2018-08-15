import { Action } from '@ngrx/store';
import { Authenticate } from '../models/authenticate';
import { User } from '../models/user';

export enum AuthActionTypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure',
    LoginRedirect = '[Auth] Login Redirect' // Guard Action
  }

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
    readonly type = AuthActionTypes.LoginFailure;

    constructor(public payload: any) {}
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
}

export type AuthActionsUnion =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;
