import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

var surveyJSON = {"title":"page1","pages":[{"name":"page1","elements":[{"type":"rating","name":"question1","domaine":"test"},{"type":"rating","name":"question@","domaine":"test"}]}]}

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
