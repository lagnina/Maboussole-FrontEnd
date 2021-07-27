import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/_models/pagination';
import { Post } from 'src/app/_models/Post';
import { Tag } from 'src/app/_models/Tag';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-actuality-list',
  templateUrl: './actuality-list.component.html',
  styleUrls: ['./actuality-list.component.css']
})
export class ActualityListComponent implements OnInit {
  posts:Post[];
  tags:Tag[];
  model:any={};
  postParams: any;
  pagination: Pagination;
  constructor(private postService: PostService,private router:Router) {
    this.postParams = this.postService.getParams();
   }

  ngOnInit(): void {
   this.loadPosts();
 this.postService.getAllPosts('actualite').subscribe(response => {
   console.log(response);
  this.posts = response.result;
})
this.postService.getTags().subscribe(response=>{
  this.tags=response;
 })

  }
  loadPosts() {
    this.postService.setPostParams(this.postParams);
    this.postService.getAllPosts('actualite').subscribe(response => {
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
        this.model.Type = 'actualite'
        this.postService.PostCreate(this.model).subscribe(response => {
          this.router.navigateByUrl('Actuality');
          window.location.reload();      })
      }

}


