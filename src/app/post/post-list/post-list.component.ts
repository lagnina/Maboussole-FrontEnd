import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { Router } from '@angular/router';

import { PostService } from 'src/app/_services/post.service';
import { Pagination } from 'src/app/_models/pagination';
import { UserParams } from 'src/app/_models/userParams';
import { PostParams } from 'src/app/_models/postParams';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[];
  postParams: PostParams;

  model:any={};
  pagination: Pagination;

  fileToUpload: File | null = null;
  constructor(private postService: PostService,private router:Router) { 
    this.postParams = this.postService.getParams();
  }

  ngOnInit(): void {

this.loadPosts();
this.GetAllPosts();


  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

GetAllPosts(){

  this.postService.getAllPosts('post').subscribe(response => {
    console.log(response);
   this.posts = response.result;
 })
}
loadPosts() {
  this.postService.setPostParams(this.postParams);
  this.postService.getAllPosts('post').subscribe(response => {
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
    var formData = new FormData();
    formData.append("CategoryPicture", this.fileToUpload);
    formData.append("PostForm",JSON.stringify(this.model));
    console.log(this.model)
        this.postService.PostCreate(formData).subscribe(response => {
          this.router.navigateByUrl('/post/list');
          window.location.reload();      })
      }

}
