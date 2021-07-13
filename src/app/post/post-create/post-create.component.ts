import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  model:any ={};
  posts:Post[];
  closeResult = '';
response : any ={}

  constructor( public postService : PostService ,public dialog: MatDialog,  private router : Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'post-create.component.html',
})


export class DialogContentExampleDialog {}


 

  

  

//   Post(){
// // subscribe = moura matawsal response hachno dir
//     this.postService.PostCreate(this.model).subscribe(response => {
//       this.router.navigateByUrl('/post/list');
//       console.log(response)
//     })
//   }

//   GetPosts() {
    

    //   this.postService.getAllPosts().subscribe(response => {
    //     console.log(response);
    //    this.posts = response;
    //  })
     
       
  
