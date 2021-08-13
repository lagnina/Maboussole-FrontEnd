import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Formation } from '../_models/Formation';

import { environment } from 'src/environments/environment';
import { FormationParams } from '../_models/formationParams';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  formationParams: any;
  baseUrl = environment.apiUrl;

  formation:Formation;
  constructor(private http: HttpClient, private presence: PresenceService) {
    this.formationParams = new FormationParams();
   }

   getParams(){
     return this.formationParams;
   }
   setFormationParams( params:FormationParams){
     this.formationParams=params;
   }

   getAllFormations(Domaine:string="",Secteur:string="",Etablissement:string="",Ville:string=""){

    let params = getPaginationHeaders(this.formationParams.pageNumber, this.formationParams.pageSize);
    params = params.append('Domaine',Domaine);
    params = params.append('Secteur',Secteur);
    params = params.append('Etablissement',Etablissement);
    params = params.append('Ville',Ville);

console.log(params)
    return getPaginatedResult<Formation[]>(this.baseUrl + 'formation/FormationsByDomaine', params, this.http)
    .pipe(map(response => {
      return response;
    }));

   }

   getFormationByName(Name :string){
    return this.http.get<Formation>(this.baseUrl + 'formation/formations/'+Name);
}


}
 