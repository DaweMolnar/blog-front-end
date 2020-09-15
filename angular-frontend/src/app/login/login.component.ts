import { Component, OnInit } from '@angular/core';
import {BlogApiService} from "../blog-api.service";
import {Token, User} from "../models/api.models";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as TokenActions from './../actions/store.actions'
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors = [];
  hasError = false;

  constructor(private apiService : BlogApiService, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm : User) {
    this.errors=[]
    this.apiService.login(loginForm).subscribe(
      (token: Token) => {
        this.hasError = false;
        console.log(token.token);
        this.store.dispatch(new TokenActions.AddToken(token));
        this.router.navigate(['']);
      },
      error => {this.hasError = true; this.errors.push(JSON.stringify(error));}
    )
  }

}
