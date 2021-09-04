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

  villes:string[]=[
    "Agadir",
    "Fès",
    "El Jadida",
    "Casablanca",
    "Safi",
    "Khouribga",
    "Salé",
    "Oujda",
    "Meknès",
    "Laayoune",
    "Kénitra",
    "Settat",
    "Mohammedia",
    "Marrakech",
    "Errachidia",
    "Béni",
    "Tétouan",
    "Rabat",
    "Al Hoceima",
    "Berrechid",
    "Tanger"
  ];


  formation:any={};
  formations:Formation[];
  pagination: Pagination;
  formationParams:FormationParams;

  constructor(private formationService:FormationService,private router:Router) {
    this.formationParams = this.formationService.getParams();
   }

  ngOnInit(): void {
    this.getAllFormations();
  }

  getAllFormations(){
    this.formationService.getAllFormations("").subscribe(
      response => {
        this.formations= response.result;
        this.pagination = response.pagination;
        console.log(response.result)
      })
  }

  Rechercher(){
    this.formationService.getAllFormations(this.formation.Domaine,this.formation.Secteur,this.formation.Etablissement,this.formation.Ville).subscribe(
      response => {
        this.formations= response.result;
        this.pagination = response.pagination;
        
      })
  }

  LoadFormation(){
    this.formationService.setFormationParams(this.formationParams);
    this.formationService.getAllFormations(this.formation.Domaine,this.formation.Secteur,this.formation.Etablissement,this.formation.ville).subscribe(response => {
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
