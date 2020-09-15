import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {PostAdd, Token} from "../models/api.models";
import {Observable} from "rxjs";
import {BlogApiService} from "../blog-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  errors = [];
  hasError = false;
  token$: Observable<Token>;
  post : PostAdd;

  constructor(private apiService : BlogApiService, private store: Store<AppState>, private router: Router ) {
    this.token$ = store.select('token');
  }

  ngOnInit(): void {
  }

  addPost(form, token : string) {
    this.errors=[]
    this.apiService.addPost({title : form.title, author : 1, content : form.content, labels : [1]}, {token : token}).subscribe(
      (posts) => {
        this.hasError = false;
        console.log(token);
        this.router.navigate(['']);
      },
      error => {this.hasError = true; this.errors.push(JSON.stringify(error));}
    );
  }
}
