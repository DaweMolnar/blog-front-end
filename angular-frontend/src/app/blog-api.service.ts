import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Label, Post, Token, User} from "./models/api.models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  readonly api_url : string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  loadPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api_url + '/api/post/?format=json').pipe(
      map(events => events.sort((a, b) => new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime()))
    );
  }

  loadComments(id : number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.api_url + '/api/comment/filter/' + id + '/?format=json');
  }

  loadLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this.api_url + '/api/label/?format=json');
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.api_url + '/api-token-auth/', user);
  }
}
