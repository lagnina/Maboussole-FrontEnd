import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/_models/Post';
import { Tag } from 'src/app/_models/Tag';
import { TagService } from 'src/app/_services/tag.service';
import { PostService } from '../../_services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


  model:any={};
  posts:Post[];
  fileToUpload: File | null = null;
Tags :string[]=['Education','Orientations','Learning','School',
'Motivation','Student'
,'Knowledge','English','science','communication','learn','training','Success'];

selectedTag: Tag[];



selectedValue: any = "6-8";
    tags:Tag[];

  constructor(private postService: PostService, private toastr: ToastrService,private config: NgSelectConfig,private router:Router,private tagService:TagService) { 

  }


  ngOnInit(): void {
    this.getAllTags();

   
  
  }
getAllTags(){
  this.tagService.getTags().subscribe(response =>{
    console.log(response);
    this.tags=response;
 });
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
          this.toastr.success('Post Created Successfully');
          this.router.navigateByUrl('/post/list');
        
        })}
              toggleDisabled() {
        const tag: any = this.tags[1];
        tag.disabled = !tag.disabled;
    }
  

//     TagCreate(){
//       var formData = new FormData();
//       formData.getAll()
//     }
// }

 

  

  

  PostList(){
    this.postService.PostCreate(this.model).subscribe(response => {
      this.router.navigateByUrl('/post/list');
      console.log(response)
    })
  }

  GetPosts() {
    

      this.postService.getAllPosts(this.model).subscribe(response => {
        console.log(response);
       this.posts = response.result;
     })
     
       
  
  }
}