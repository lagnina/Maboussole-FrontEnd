import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/_models/pagination';
import { Post } from 'src/app/_models/Post';
import { Tag } from 'src/app/_models/Tag';
import { PostService } from 'src/app/_services/post.service';
import { TagService } from 'src/app/_services/tag.service';

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
  constructor(private postService: PostService,private tagService :TagService,private router:Router) {
    this.postParams = this.postService.getParams();

   }

  ngOnInit(): void {

    if(this.router.url.includes('tag')){
      this.postService.getAllPostsByTag( this.router.url.split('/').pop() ).subscribe(response => {
       this.posts = response.result;
       console.log(this.posts)
     })
     this.tagService.getTags().subscribe(response=>{
      console.log(response);
      this.tags=response;
     })
    }else{
      this.loadPosts();
      this.postService.getAllPosts('actualite').subscribe(response => {
        console.log(response);
       this.posts = response.result;
       console.log(this.posts)
     })
       this.tagService.getTags().subscribe(response=>{
         console.log(response);
         this.tags=response;
        })
     

    }
    
 



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
        this.model.Type = 'Filieres-Orientations'
        this.postService.PostCreate(this.model).subscribe(response => {
          this.router.navigateByUrl('Actuality');
          window.location.reload();      })
      }

      reload(id:number){
        console.log(id);
        this.router.navigate(['Filieres-Orientations/tag/'+id])
  .then(() => {
    window.location.reload();
  });   
      }

}

