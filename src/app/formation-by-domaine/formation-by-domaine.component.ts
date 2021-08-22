import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../_models/Formation';
import { FormationParams } from '../_models/formationParams';
import { Pagination } from '../_models/pagination';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formation-by-domaine',
  templateUrl: './formation-by-domaine.component.html',
  styleUrls: ['./formation-by-domaine.component.css']
})
export class FormationByDomaineComponent implements OnInit {
  
  formation:any={};
  formations:Formation[];
  pagination: Pagination;
  formationParams:FormationParams;

  constructor(private formationService:FormationService,private router:Router,private route: ActivatedRoute) {
    this.formationParams = this.formationService.getParams();
   }

  ngOnInit(): void {
    let Domaine = this.route.snapshot.paramMap.get("DomaineName")

    this.getAllFormations(Domaine);

  }

  getAllFormations(Domaine:string){
    this.formationService.getAllFormations(Domaine=Domaine).subscribe(
      response => {
        this.formations= response.result;
        this.pagination = response.pagination;
        console.log(response.result)
      })
  }

  Rechercher(){
    this.formationService.getAllFormations(this.formation.Domaine,this.formation.Secteur,this.formation.Etablissment,this.formation.Ville).subscribe(
      response => {
        this.formations= response.result;
        this.pagination = response.pagination;
        
      })
  }

  LoadFormation(){
    this.formationService.setFormationParams(this.formationParams);
    this.formationService.getAllFormations(this.formation.Domaine,this.formation.Secteur,this.formation.Etablissment,this.formation.ville).subscribe(response => {
      this.formations = response.result;

    this.pagination = response.pagination;
    console.log(this.pagination)
    })
  }
  pageChanged(event: any) {
    this.formationParams.pageNumber = event.page;
    this.formationService.setFormationParams(this.formationParams);
    this.LoadFormation();
  }
}
