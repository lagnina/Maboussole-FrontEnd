import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/_models/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-actuality-list',
  templateUrl: './actuality-list.component.html',
  styleUrls: ['./actuality-list.component.css']
})
export class ActualityListComponent implements OnInit {
  posts:Post[];
  model:any={};
  constructor(private postService: PostService,private router:Router) { }

  ngOnInit(): void {

 this.postService.getAllPosts('actualite').subscribe(response => {
   console.log(response);
  this.posts = response;
})

  }

  Post(){
    // subscribe = moura matawsal response hachno dir
        this.model.Type = 'actualite'
        this.postService.PostCreate(this.model).subscribe(response => {
          this.router.navigateByUrl('Actuality');
          window.location.reload();      })
      }

}


