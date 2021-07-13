import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/Post';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Post[];
  model:any={};
  constructor(private postService: PostService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {

 this.postService.getAllPosts('post').subscribe(response => {
   console.log(response);
  this.posts = response;
})

  }
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  Post(){
    // subscribe = moura matawsal response hachno dir
        this.postService.PostCreate(this.model).subscribe(response => {
          this.router.navigateByUrl('/post/list');  
          window.location.reload();      })
      }

}
@Component({
  selector: 'dialog-content-example-dialog',
  template: '<div>aaaaaaaaaa</div>',

})
export class DialogContentExampleDialog {}