import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../_models/Post';
import { PostParams } from '../_models/postParams';
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

    return this.http.post(this.baseUrl + 'Questionnaire/Quiz' ,model);
  }
}
