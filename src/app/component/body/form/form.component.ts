import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator} from '@angular/forms'
import {Iform} from '../form/Iform';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form : Iform | any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
