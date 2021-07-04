import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/_models/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-actuality-card',
  templateUrl: './actuality-card.component.html',
  styleUrls: ['./actuality-card.component.css']
})
export class ActualityCardComponent implements OnInit {
  model:any ={}
response : any ={}
@Input() post: Post;

  constructor( public postService : PostService , private router : Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  deletePost(){


  }
  getDetails(){


  }
  dislikePost(){


  }
  likePost(post: Post){

    this.postService.likepost(post.postId).subscribe(() =>{

        this.toastr.success('you have liked this post');
    })


    
  }

}
