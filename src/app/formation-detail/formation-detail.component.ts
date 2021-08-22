import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../_models/Formation';
import { Member } from '../_models/member';
import { User } from '../_models/user';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  model: any = {}
  response: any = {}
  @Input()formation:Formation;
  formations:Formation[];

  member: Member;
  user: User;

  constructor(private formationService:FormationService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.name)

  

  this.formationService.getFormationByName(this.route.snapshot.params.name).subscribe(response => {
    this.formation=response;
    console.log(response);
    })
  
  }

  getAllFormations(){
    
  }

}
