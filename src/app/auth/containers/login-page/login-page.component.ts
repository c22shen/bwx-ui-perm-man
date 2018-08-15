import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../reducers/auth.reducer';
import { Authenticate } from '../../models/authenticate';
import * as AuthActions from '../../actions/auth.actions';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
//  Pending and error not used
  pending$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new AuthActions.Login($event));
  }

}
