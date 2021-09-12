import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare var powerbi: any;



@Component({
  selector: 'app-power-bi',
  templateUrl: './power-bi.component.html',
  styleUrls: ['./power-bi.component.css']
})
export class PowerBiComponent implements OnInit {

  @ViewChild('embeddedReport')
  embeddedReport: ElementRef;
  config: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {


  }

}
