import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BlogApiService} from "../blog-api.service";
import {Label, Post} from "../models/api.models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  labels$ : Observable<Label[]>;
  posts$ : Observable<Post[]>;

  constructor(private apiService : BlogApiService) { }

  ngOnInit(): void {
    this.labels$ = this.apiService.loadLabels();
    this.posts$ = this.apiService.loadPosts();
  }
}
