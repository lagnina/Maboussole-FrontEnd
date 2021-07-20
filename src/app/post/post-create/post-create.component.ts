import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/_models/Post';
import { PostService } from '../../_services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  closeResult = '';

}

 

  

  

//   Post(){
//     this.postService.PostCreate(this.model).subscribe(response => {
//       this.router.navigateByUrl('/post/list');
//       console.log(response)
//     })
//   }

//   GetPosts() {
    

//       this.postService.getAllPosts().subscribe(response => {
//         console.log(response);
//        this.posts = response;
//      })
     
       
  
    