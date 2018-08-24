import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Authenticate } from '../models/authenticate';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    // loginResp: Observable<any>;

    login({ username, password }: Authenticate): Observable<any> {
        return this.http.post(`/login?username=${username}&password=${password}`, {}, {
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
    }

    logout(): Observable<Boolean> {
        return of(true);
    }
}
