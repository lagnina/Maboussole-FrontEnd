import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/_models/Post';
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

selectedTag: number;



options =[
  {name:"post"},
  {name:"conseil"},
  {name:"actualite"},
];
selectedValue: any = "Type";
    tags = [
        { id: 1, name: 'Education' },
        { id: 2, name: 'Orientations' },
        { id: 3, name: 'Learning' },
        { id: 4, name: 'Science' },
        { id: 5, name: 'Knowledge' },

        { id: 6, name: 'English' },

        { id: 7, name: 'training' },

    ];

  constructor(private postService: PostService,private config: NgSelectConfig,private router:Router) { 

  }


  ngOnInit(): void {
  
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  Post(){
    var formData = new FormData();
    formData.append("CategoryPicture", this.fileToUpload);
    this.model.PostTags = [ {
      Id: 1,
      name:'tag1'
    }]
    formData.append("PostForm",JSON.stringify(this.model));
    console.log(this.model)
        this.postService.PostCreate(formData).subscribe(response => {
          this.router.navigateByUrl('/post/list');
          window.location.reload();    
        
        })
      }

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