import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

var surveyJSON = {
  "title": "Test1", "pages": [{
    "name": "Test 1", "elements": [
{
                          "type": "rating", "name": " Vous êtes inspiré par les matériaux, les formes, les couleurs et les textures qui vous entouren","domaine":"test"},
{ "type": "rating", "name": "Vous êtes désireux de trouver des applications pratiques des sciences dans des laboratoires ou des entreprises de haute technologie", "domaine": "test" },
{"type": "rating", "name": " Vous êtes déjà investi dans la planification et l’organisation d’activités variées dans votre milieu","domaine":"test"},
{ "type": "rating", "name": "Je me préoccupe professionnellement de la santé des êtres vivants", "domaine": "test" },
{
        "type": "rating", "name": " Vous êtes désireux de développer des compétences dans l’organisation du travail ou la gérance de systèmes informatiques","domaine":"test"},
{
          "type": "rating", "name": " Vous êtes bon communicateur sachant bien traduire sa pensée et ses connaissances avec les médias","domaine":"test"}]}]}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  
    ngOnInit() {
      var survey = new Survey.Model(surveyJSON);
      survey.onComplete.add(sendDataToServer);
     Survey.SurveyNG.render("surveyElement", { model: survey });
  }

}
