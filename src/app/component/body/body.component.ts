import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  hola : string = "'caracola";

  constructor() { 

    this.hola="hola";
  }

  ngOnInit(): void {
  }

}
