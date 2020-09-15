import {Component, Input, OnInit} from '@angular/core';
import {Label, Post} from "../models/api.models";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  post: Post;

  @Input()
  labels: Label[];

  constructor() { }

  ngOnInit(): void {
  }

  getLabelName(id:number) : string {
      for (let label of this.labels) {
        if (label.id == id) {
          return label.name
        }
      }
  }

}
