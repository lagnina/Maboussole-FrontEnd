import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../_models/Formation';
import { Member } from '../_models/member';
import { User } from '../_models/user';
import { FormationService } from '../_services/formation.service';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css']
})
export class FormationCardComponent implements OnInit {
  model: any = {}
  response: any = {}
  @Input()formation:Formation;
  formations:Formation[];

  member: Member;
  user: User;

  constructor(private formationService:FormationService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  //   console.log(this.route.snapshot.params.id)

  

  // this.formationService.getFormationByName(this.route.snapshot.params.name).subscribe(response => {
  //   this.formation=response;
  //   console.log(response);
  //   })
  console.log(this.formation);
  
 }

  getAllFormations(){
    
  }
  hack(val) {
    return Array.from(val);
  }
  


}
