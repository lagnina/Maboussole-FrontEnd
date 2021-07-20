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
  fileToUpload: File | null = null;
Tag :string[]=['Education','Orientations','Learning','School','Motivation','Student'
,'Knowledge','English','science','communication','learn','training','Success'];

selectedCar: number;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

  constructor(private postService: PostService,private config: NgSelectConfig,private router:Router) { }


  ngOnInit(): void {
  
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

      toggleDisabled() {
        const car: any = this.cars[1];
        car.disabled = !car.disabled;
    }
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
     
       
  
    