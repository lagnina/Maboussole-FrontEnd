import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../_models/Formation';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  formation:Formation;

  constructor(private formationService:FormationService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id)

  

  this.formationService.getFormationByName(this.route.snapshot.params.name).subscribe(response => {
    this.formation=response;
    console.log(response);
    })
  
  }


}
