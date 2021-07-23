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
  constructor(private router: Router,private postService: PostService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getpost();
  }

  getpost() {
    this.postService.getAllPosts('conseil').subscribe(response => {
      console.log(response);
     this.posts = response;
     console.log(this.posts)
    });
    this.postService.getAllPosts('actualite').subscribe(response =>
    {
        this.posts = this.posts.concat(response);
    });

    }

    registerToggle() {
      this.router.navigateByUrl('/Register')
    }

    cancelRegisterMode(event: boolean) {
      this.registerMode = event;
    }

  }




