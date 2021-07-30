import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tag } from '../_models/Tag';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl = environment.apiUrl;

  tag:Tag;
  constructor(private http: HttpClient, private presence: PresenceService) { }



  TagCreate(model:any ){

    return this.http.post(this.baseUrl + 'Tag/AddTag', model).pipe(
  map((response:Tag)=>{
    console.log(response);
  })
)

  }

  getTags() {
   
    return this.http.get<Tag[]>(this.baseUrl+ 'tag/GetAllTags',{})
  }
  
}
