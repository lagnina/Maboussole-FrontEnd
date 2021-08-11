import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from '../_models/Formation';
import { FormationParams } from '../_models/formationParams';
import { Pagination } from '../_models/pagination';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  formation:any={};
  formations:Formation[];
  pagination: Pagination;
  formationParams:FormationParams;

  constructor(private formationService:FormationService,private router:Router) { }

  ngOnInit(): void {
    this.getAllFormations();
  }

  getAllFormations(){
    this.formationService.getAllFormations("").subscribe(
      response => {
        this.formations= response.result;
        console.log(response.result)
      })
  }

  Rechercher(){

    this.formationService.getAllFormations(this.formation.Domaine,this.formation.Secteur,this.formation.Etablissment)
  }

  LoadFormation(){
    this.formationService.setFormationParams(this.formationParams);
    this.formationService.getAllFormations('').subscribe(response => {
      this.formation = response.result;

    this.pagination = response.pagination;
    })
  }
}
