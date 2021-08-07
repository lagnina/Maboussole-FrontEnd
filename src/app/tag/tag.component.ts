import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/Post';
import { Tag } from '../_models/Tag';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

@Input()

  tag:Tag;
  posts:Post[];

  constructor( private postService :PostService) { }

  ngOnInit(): void {
    this.GetAllPosts();
  }

  GetAllPosts(){

    this.postService.getAllPosts('post').subscribe(response => {
    
     this.posts = response.result;
     console.log(response.result);
  
   })
  }


}
