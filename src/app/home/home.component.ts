import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/Post';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  posts:Post[];
  model:any={};

  constructor(private router: Router,private postService: PostService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getpost();
  }

  getpost() {
    this.postService.getAllPosts('conseil').subscribe(response => {
      console.log(response);
     this.posts = response.result;
     console.log(this.posts)
    });
    

    }

    registerToggle() {
      this.router.navigateByUrl('/Register')
    }

    cancelRegisterMode(event: boolean) {
      this.registerMode = event;
    }
    
  Post(){
    this.model.Type = 'actualite'
    this.postService.PostCreate(this.model).subscribe(response => {
      this.router.navigateByUrl('Actuality');
      window.location.reload();      })
  }


  }




