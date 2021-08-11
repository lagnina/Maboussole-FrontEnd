import { Component, Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from '../_services/test.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Survey from 'survey-angular';
import { Results, Value } from '../_models/Result';


var surveyJSON ={
  "title" : "page1",
 "pages": [
  {
   "name": "page3",
   "elements": [
    {
                          "type": "rating",
                           "name" : "Vous êtes du type investigateur, chercheur, pour aller toujours plus loin dans vos découvertes scientifiques",
                          "domaines":[
                            {"name":"Genie Mecanique",
                              "rating": 5
                              },
                              {"name":"Informatique",
                                "rating": 3
                                },
                                {"name":"Genie civil",
                                  "rating": 1},
                                  {"name":"Genie Industriel",
                                    "rating": 1},
                                    {"name":"Biologie et environnement",
                                      "rating": 5},
                                      {"name": "Electricite electronique",
                                        "rating": 5}]}
                                        ,
    {
      "type": "rating", "name": "Vous êtes discipliné et patient pour atteindre vos objectifs"
      ,
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":5},
              {"name":"Genie Industriel",
                "rating": 5},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 5}]


    },
    {
      "type": "rating", "name": "Vous êtes désireux de travailler avec les nouvelles technologies ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5},

          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":4},
              {"name":"Genie Industriel",
                "rating": 3},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 5}]

    },
    {
      "type": "rating", "name": "Vous êtes désireux d’acquérir davantage de connaissances et de compétences en sciences, particulièrement ce qui touche la biologie ou la chimie, ainsi que leurs applications    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 1
          },
          {"name":"Informatique",
            "rating": 0
            },
            {"name":"Genie civil",
              "rating":1},
              {"name":"Genie Industriel",
                "rating": 1},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 1}]

    },
    {
      "type": "rating", "name": "Vous êtes du type investigateur, chercheur, pour aller toujours plus loin dans vos découvertes scientifiques","domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 3
            },
            {"name":"Genie civil",
              "rating":3},
              {"name":"Genie Industriel",
                "rating": 3},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 5}]

    },
    {
      "type": "rating", "name": "Vous êtes prêt à réaliser des tâches administratives nécessitant la prise ou l’application de décisions dans le respect des règles établies    ","domaines":[
        {"name":"Genie Mecanique",
          "rating": 3
          },
          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":5},
              {"name":"Genie Industriel",
                "rating": 4},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 3}]
    },
    {
      "type": "rating", "name": "Vous êtes à l’aise dans les laboratoires, à faire des analyses et des interprétations de données mathématiques, biologiques, chimiques ou physiques    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5},

          {"name":"Informatique",
            "rating": 2
            },
            {"name":"Genie civil",
              "rating":5},
              {"name":"Genie Industriel",
                "rating": 2},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 5}]
                  },


    {
      "type": "rating", "name": "Vous êtes passionné d’informatique","domaines":[
        {"name":"Genie Mecanique",
          "rating": 2
          },
          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":1},
              {"name":"Genie Industriel",
                "rating": 1},
                {"name":"Biologie et environnement",
                  "rating": 2},
                  {"name": "Electricite electronique",
                    "rating": 3}]

    },
    {
      "type": "rating", "name": "Vous êtes à l’aise dans l’exercice d’un travail multidisciplinaire, parfois intense    ","domaines":[
        {"name":"Genie Mecanique",
          "rating": 4
          },
          {"name":"Informatique",
            "rating": 3
            },
            {"name":"Genie civil",
              "rating":5},
              {"name":"Genie Industriel",
                "rating": 4},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 4}
      ]

    },
    {
      "type": "rating", "name": "Vous êtes désireux de trouver des applications pratiques des sciences dans des laboratoires ou des entreprises de haute technologie","domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":3},
              {"name":"Genie Industriel",
                "rating": 3},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 5}]}
    ,
    {
      "type": "rating", "name": "Vous êtes inspiré par les matériaux, les formes, les couleurs et les textures qui vous entourent    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 1
            },
            {"name":"Genie civil",
              "rating":4},
              {"name":"Genie Industriel",
                "rating": 2},
                {"name":"Biologie et environnement",
                  "rating": 2},
                  {"name": "Electricite electronique",
                    "rating": 2}]

    },
    {
      "type": "rating", "name": "Vous êtes curieux d’en apprendre davantage sur le monde scientifique, ses recherches et ses applications    ","domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 2
            },
            {"name":"Genie civil",
              "rating":3},
              {"name":"Genie Industriel",
                "rating": 3},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 5}]

    },
    {
      "type": "rating", "name": "Vous êtes déjà investi dans la planification et l’organisation d’activités variées dans votre milieu    ","domaines":[
        {"name":"Genie Mecanique",
          "rating": 4
          },
          {"name":"Informatique",
            "rating": 2
            },
            {"name":"Genie civil",
              "rating":4},
              {"name":"Genie Industriel",
                "rating": 4},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 3}]

    },
    {
      "type": "rating", "name": "Vous êtes préoccupé par la santé des êtres vivants et désireux de l’influencer professionnellement    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 2
          },
          {"name":"Informatique",
            "rating": 2
            },
            {"name":"Genie civil",
              "rating":2},
              {"name":"Genie Industriel",
                "rating": 2},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 2}]

    },
    {
      "type": "rating", "name": "Vous êtes désireux de développer des compétences dans l’organisation du travail ou la gérance de systèmes informatiques    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 0
          },
          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":0},
              {"name":"Genie Industriel",
                "rating": 0},
                {"name":"Biologie et environnement",
                  "rating": 0},
                  {"name": "Electricite electronique",
                    "rating": 0}]

    },
    {
      "type": "rating", "name": "Je me retrouve bien dans un laboratoire à suivre un protocole détaillé et des normes pour réaliser une expérience    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 3
          },
          {"name":"Informatique",
            "rating": 0
            },
            {"name":"Genie civil",
              "rating":2},
              {"name":"Genie Industriel",
                "rating": 2},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 3}]

    },
    {
      "type": "rating", "name": "Je rêve de faire un jour des découvertes scientifiques qui contribueront à la progression de la science et à l’amélioration de la qualité de vie des gens    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 2
            },
            {"name":"Genie civil",
              "rating":2},
              {"name":"Genie Industriel",
                "rating": 4},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 5}]

    },
    {
      "type": "rating", "name": "Je suis désireux de contribuer à la protection de notre environnement et dans l’amélioration de la qualité de vie des gens    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 1
          },
          {"name":"Informatique",
            "rating": 1
            },
            {"name":"Genie civil",
              "rating":3},
              {"name":"Genie Industriel",
                "rating": 1},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 1}]

    },
    {
      "type": "rating", "name": "Je suis attiré par l’esthétisme des paysages et l’architecture des bâtiments   ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 2
          },
          {"name":"Informatique",
            "rating": 0
            },
            {"name":"Genie civil",
              "rating":1},
              {"name":"Genie Industriel",
                "rating": 0},
                {"name":"Biologie et environnement",
                  "rating": 0},
                  {"name": "Electricite electronique",
                    "rating": 0}]


    },
    {
      "type": "rating", "name": "J’accepte avec plaisir de participer à des travaux de construction ou de rénovation    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 0
          },
          {"name":"Informatique",
            "rating": 0
            },
            {"name":"Genie civil",
              "rating":5},
              {"name":"Genie Industriel",
                "rating": 0},
                {"name":"Biologie et environnement",
                  "rating": 0},
                  {"name": "Electricite electronique",
                    "rating": 0}]
                  },

    {
      "type": "rating", "name": "Je m’intéresse aux questions concernant l’écologie, l’environnement et les biotechnologies    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 0
          },
          {"name":"Informatique",
            "rating": 0 },
            {"name":"Genie civil",
              "rating":5},
              {"name":"Genie Industriel",
                "rating": 0},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 0}]

    },
    {
      "type": "rating", "name": "Je veux toujours en savoir plus sur les expériences réalisées en laboratoire et je consulte souvent les sources accessibles sur le sujet    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 3
          },
          {"name":"Informatique",
            "rating": 1
            },
            {"name":"Genie civil",
              "rating":0},
              {"name":"Genie Industriel",
                "rating": 2},
                {"name":"Biologie et environnement",
                  "rating": 5},
                  {"name": "Electricite electronique",
                    "rating": 3}]
                  },
    {
      "type": "rating", "name": "J’aime faire des calculs avec ou sans ordinateur    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 5
            },
            {"name":"Genie civil",
              "rating":2},
              {"name":"Genie Industriel",
                "rating": 3},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 5}]

    },
    {
      "type": "rating", "name": "Je suis à l’aise avec des données abstraites et je n’ai pas peur d’avancer, même si la tâche ou le problème à résoudre est compliqué; je vois cela comme un défi    ",
      "domaines":[
        {"name":"Genie Mecanique",
          "rating": 5
          },
          {"name":"Informatique",
            "rating": 3
            },
            {"name":"Genie civil",
              "rating":3},
              {"name":"Genie Industriel",
                "rating": 4},
                {"name":"Biologie et environnement",
                  "rating": 3},
                  {"name": "Electricite electronique",
                    "rating": 5}]
                  }]
                  }]};

var results  = [
                    {"name":"Genie Mecanique",
                      "ratingSum": 0,
                      "note":0
                      },
                      {"name":"Informatique",
                        "ratingSum": 0,
                        "note":0
                        },
                        {"name": "Genie civil",
                          "ratingSum": 0,
                          "note":0},
                          {"name": "Genie Industriel",
                            "ratingSum": 0,
                            "note":0},
                            {"name": "Biologie et environnement",
                              "ratingSum": 0,
                              "note":0},
                              {"name":  "Electricite electronique",
                                "ratingSum": 0,
                                "note":0}];

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    console.log("The results are:" + JSON.stringify(survey.data));
    Object.keys(survey.data).forEach(function(key) {
      var results = [];
      var value = survey.data[key];
      var arr = findElement(surveyJSON.pages[0].elements,"name",key);
      arr.domaines.forEach(el=>{
        var res = {name : "",
      rating: 0,
    note : 0};
        res.name = el.name;
        res.rating = el.rating;
        res.note =value * el.rating;
        console.log(res);
        results.push(res);

      });
      addToResult(results);

  });
  for (var key in results) {
    results[key].note =  results[key].note/results[key].ratingSum
  }

  document
  .querySelector('#surveyResult2')
  .textContent = "Result JSON:\n" + JSON.stringify(results);
  const confirm = document.getElementById("confirm");
  confirm.removeAttribute('Disabled');

}
function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function findElement(arr, propName, propValue) {
  for (var i=0; i < arr.length; i++)
    if (arr[i][propName].includes(propValue) || propValue.includes(arr[i][propName]) )
      return arr[i];

}
function addToResult(values){
  values.forEach(value=>{
    results.forEach(res=>{
      if(res.name == value.name){
        res.ratingSum += value.rating;
        res.note += value.note;
      }
    });
  });
}



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  QuizResults: Value[] =[

  ];
  resultsVis=false;
  testNote:number;
  filtersLoaded: Promise<boolean>;
  constructor(private testService:TestService) { }


ngOnInit() {
  this.testService.CheckResults().subscribe(response=>{


    response["$values"].map(item=>{
      const a= {
        "domaine" : item.domaine,
        "note":item.note*20
      };
    this.QuizResults.push(a);
    });
console.log(this.QuizResults);
      if(this.QuizResults.length != 0){
        this.resultsVis=true;

      }
      else{
        console.log("bb")
        surveyJSON.pages[0].elements = randomArrayShuffle(surveyJSON.pages[0].elements)
        var survey = new Survey.Model(surveyJSON);
        survey.onComplete.add(sendDataToServer);
       Survey.SurveyNG.render("surveyElement", { model: survey });
      }
      this.filtersLoaded = Promise.resolve(true);
  });


  }
onSave(){

 this.testService.TestResult(results).subscribe(response=>{
   console.log(response);

 });
 window.location.reload();
}
onRetake(){

  surveyJSON.pages[0].elements = randomArrayShuffle(surveyJSON.pages[0].elements)
        var survey = new Survey.Model(surveyJSON);
        survey.onComplete.add(sendDataToServer);
       Survey.SurveyNG.render("surveyElement", { model: survey });
       this.resultsVis=false;


 }


}

