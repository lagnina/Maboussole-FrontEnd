import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/_models/Post';
import { Tag } from 'src/app/_models/Tag';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-conseil-list',
  templateUrl: './conseil-list.component.html',
  styleUrls: ['./conseil-list.component.css']
})
export class ConseilListComponent implements OnInit {

  posts:Post[];
  tags:Tag[];
  model:any={};
  constructor(private postService: PostService,private router:Router) { }

  ngOnInit(): void {

 this.postService.getAllPosts('conseil').subscribe(response => {
   console.log(response);
  this.posts = response;
  console.log(this.posts)
})

this.postService.getTags().subscribe(response=>{

this.tags = response;
})

  }

  Post(){
    // subscribe = moura matawsal response hachno dir
        this.model.Type = 'conseil'
        this.postService.PostCreate(this.model).subscribe(response => {
          this.router.navigateByUrl('/post/list');
          window.location.reload();      })
      }

}

