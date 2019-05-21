import { Component, OnInit } from '@angular/core';
import { Posts } from '../services/posts'; 
import { PostsService } from '../services/posts.service';
//import { ngmodule } from '@angular/core'; 


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[]
  
  constructor(private postsService: PostsService) { }

  ngOnInit() {

  }

}
