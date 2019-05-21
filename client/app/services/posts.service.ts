import { Injectable } from '@angular/core';
import { Posts } from './posts'; 
import { Http, Response } from '@angular/http'; 

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: Http) { }

  private postsUrl = '/posts'; 

  //get("/posts")
  getPosts(): Promise<void | Posts[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response => response.json() as Posts[]); 
  }

  getTopPosts(): Promise<void | Posts[]> {
    return this.http.get(this.postsUrl + '/top')
      .toPromise()
      .then(response => response.json() as Posts[]); 
  }

  //post("/posts")
  createPosts(title: string, content: string, author: string): Promise<void | Posts[]> {
    return this.http.post(this.postsUrl, {title, content, author})
      .toPromise()
      .then(response => response.json() as Posts[]); 
  }

  /* Alternate POST Post function */
  createPostsAlt(newPost: Posts): Promise<void | Posts> {
    return this.http.post(this.postsUrl, newPost)
      .toPromise()
      .then(response => response.json() as Posts); 
  }

  likePost(id: string): Promise<void | Posts> {
    return this.http.patch(this.postsUrl + '/like/:id', id)
      .toPromise()
      .then(response => response.json() as Posts); 
  }

  dislikePost(id: string): Promise<void | Posts> {
    return this.http.patch(this.postsUrl + '/dislike/:id', id)
      .toPromise()
      .then(response => response.json() as Posts); 
  }

}
