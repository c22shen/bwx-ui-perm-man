import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  pending$: Observable<boolean>;
  error$: Observable<boolean>;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
