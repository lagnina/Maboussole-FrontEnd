import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostService } from 'src/app/_services/post.service';
import { Pagination } from 'src/app/_models/pagination';
import { PostParams } from 'src/app/_models/postParams';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;       
        

  posts:Post[];
  postParams: PostParams;

  model:any={};
  pagination: Pagination;

  fileToUpload: File | null = null;
  constructor(private postService: PostService,private toastr: ToastrService,private router:Router,private formBuilder: FormBuilder) { 
    this.postParams = this.postService.getParams();
  }

  ngOnInit() {
  
this.loadPosts();
this.GetAllPosts();


  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

GetAllPosts(){

  this.postService.getAllPosts('post').subscribe(response => {
  
   this.posts = response.result;
   console.log(response.result);

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

      show()
      {
        this.showModal = true; // Show-Hide Modal Check
        
      }
      //Bootstrap Modal Close event
      hide()
      {
        this.showModal = false;
      }
     
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if(this.submitted)
        {
          this.showModal = false;
        }
       
    }

    PostList(){
      this.postService.PostCreate(this.model).subscribe(response => {
        this.router.navigateByUrl('/post/list');
        console.log(response)
      })
    }
    Poster(){
      var formData = new FormData();
  
  
      formData.append("CategoryPicture", this.fileToUpload);
  
  
      formData.append("PostForm",JSON.stringify(this.model));
      console.log(this.model)
          this.postService.PostCreate(formData).subscribe(response => {
            this.toastr.success('Post Created Successfully');
            window.location.reload();  
          
          })}
                
    
}
