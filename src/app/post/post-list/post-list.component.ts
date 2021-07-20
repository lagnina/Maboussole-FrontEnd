import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { Router } from '@angular/router';

import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[];
  model:any={};
  fileToUpload: File | null = null;
  constructor(private postService: PostService,private router:Router) { }

  ngOnInit(): void {

 this.postService.getAllPosts('post').subscribe(response => {
   console.log(response);
  this.posts = response;
})

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
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
