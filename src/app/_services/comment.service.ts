import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Comment } from "../_models/Comment";
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  commentParams: Observable<any>;
  baseUrl = environment.apiUrl;
  comment:Comment;

  constructor(private http: HttpClient) { }

// getComments(postId: number) {
//   let params = getPaginationHeaders(this.commentParams.postId, this.commentParams.pageSize);
//   params = params.append('Type',type);


//    return getPaginatedResult<Comment[]>(this.baseUrl + 'post/posts', params, this.http)
//    .pipe(map(response => {
//      return response;
//    }));}

// createNewComment(model: any) {
   
//   return this.http.post(this.baseUrl + 'post/create', model).pipe(
//     map((response:Comment ) =>{

//       console.log(response);


//     })
//   )
// }



// handleError(err: HttpErrorResponse) {
//     return throwError(err);
// }

// }
// function model(arg0: string, model: any) {
//   throw new Error('Function not implemented.');
}

