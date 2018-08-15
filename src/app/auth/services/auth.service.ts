import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Authenticate } from '../models/authenticate';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    constructor() {}

    login({ username, password }: Authenticate): Observable<User> {
        return of({ name: 'User' });
    }

    logout(): Observable<Boolean> {
        return of(true);
    }
}
