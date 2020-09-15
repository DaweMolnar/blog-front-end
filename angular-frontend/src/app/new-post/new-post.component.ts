import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Token} from "../models/api.models";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  token$: Observable<Token>;
  constructor( private store: Store<AppState> ) {
    this.token$ = store.select('token');
  }

  ngOnInit(): void {
  }

}
