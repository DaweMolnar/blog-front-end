import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Label, Post} from "./models/api.models";

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  readonly api_url : string = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  loadPosts(): Observable<Post[]> {
    const options = {
      responseType: 'json' as const,
    };
    return this.http.get<Post[]>(this.api_url + '/post/?format=json', options);
  }

  loadComments(id : number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.api_url + '/comment/filter/' + id + '/?format=json');
  }

  loadLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this.api_url + '/label/?format=json');
  }
}