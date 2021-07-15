import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-actuality-detail',
  templateUrl: './actuality-detail.component.html',
  styleUrls: ['./actuality-detail.component.css']
})
export class ActualityDetailComponent implements OnInit {

 post:Post;
  



  constructor(private postService :PostService ) { }

  ngOnInit(): void {


    this.postService.getPost(this.post.postId).subscribe(response => {
    this.post=response;
    console.log(response);
    });


  }
    
}
