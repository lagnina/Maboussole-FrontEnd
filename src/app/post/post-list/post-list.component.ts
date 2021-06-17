import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {

 this.postService.getAllPosts().subscribe(response => {
   console.log(response);
  this.posts = response;
})

  }

}
