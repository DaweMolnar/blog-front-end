export interface Post {
  id: number;
  title: string;
  content: string;
  creation_date: Date;
  up_votes: string;
  down_votes: number;
  author: number;
  labels: number[];
}

export interface PostAdd {
  title: string;
  content: string;
  author: number;
  labels: number[];
}

export interface Label {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  author: string;
  body: string;
  creation_date: string;
  up_votes: number;
  down_votes: number;
  post: number;
}

export interface User {
  username: string;
  password: string;
}

export interface Token {
  token: string;
}
