import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/_models/pagination';
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
  model:any={};
  tags:Tag[];
  postParams: any;
  pagination: Pagination;
  constructor(private postService: PostService,private router:Router) {
    this.postParams = this.postService.getParams();

   }

  ngOnInit(): void {
    this.loadPosts();

 this.postService.getAllPosts('conseil').subscribe(response => {
   console.log(response);
  this.posts = response.result;
  console.log(this.posts)
})
  this.postService.getTags().subscribe(response=>{
    this.tags=response;
   })
  


  }
  loadPosts() {
    this.postService.setPostParams(this.postParams);
    this.postService.getAllPosts('conseil').subscribe(response => {
      this.posts = response.result;
      this.pagination = response.pagination;
    })
  }
  
  pageChanged(event: any) {
    this.postParams.pageNumber = event.page;
    this.postService.setPostParams(this.postParams);
    this.loadPosts();
  }

  Post(){
    // subscribe = moura matawsal response hachno dir
        this.model.Type = 'conseil'
        this.postService.PostCreate(this.model).subscribe(response => {
          this.router.navigateByUrl('/post/list');
          window.location.reload();      })
      }

}

