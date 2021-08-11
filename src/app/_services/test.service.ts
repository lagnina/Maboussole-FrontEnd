import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../_models/Post';
import { PostParams } from '../_models/postParams';
import { Results, Value } from '../_models/Result';
import { Tag } from '../_models/Tag';
import { UserParams } from '../_models/userParams';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  TestResult(model:any){
  console.log(model[0])
    return this.http.post(this.baseUrl + 'Questionnaire/Quiz' ,model);
  }
  CheckResults(){

    return this.http.get<Value[]>(this.baseUrl + 'Questionnaire/Result',{ observe: 'response' } ).pipe( map(response => {
     let res = response.body
     return res
    }));
    }
}
