import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): Observable<boolean> {
    return of(true);
  }
  constructor() { }
}
