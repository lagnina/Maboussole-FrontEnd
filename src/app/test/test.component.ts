import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

var surveyJSON = {
  
}
function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}
function ChooseQuestionRandomly(surveyJSON){
// thgis function will take 12 elements from the json to creqte the nsurvey
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
