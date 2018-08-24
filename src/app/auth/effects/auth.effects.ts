import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { Authenticate } from '../models/authenticate';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService.login(auth).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/admin']))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
