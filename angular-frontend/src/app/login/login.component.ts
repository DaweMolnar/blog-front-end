import { Component, OnInit } from '@angular/core';
import {BlogApiService} from "../blog-api.service";
import {Token, User} from "../models/api.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors = [];
  hasError = false;

  constructor(private apiService : BlogApiService) { }

  ngOnInit(): void {
  }

  login(loginForm : User) {
    this.errors=[]
    this.apiService.login(loginForm).subscribe(
      (token: Token) => {this.hasError = false; console.log(token.token)},
      error => {this.hasError = true; this.errors.push(JSON.stringify(error));}
    )
  }

}
