import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Iform} from '../body/form/Iform';
import {ServiceManagerService} from '../../services/service-manager.service';
import { Iheader, Inav } from './models/Iheader';
import { IseachForm } from './search-form/IsearchForm';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public show : Iform |any ={};
    public search : Iheader | any ={};
    public nav : Inav | any = {};
    public myArray : number[];
    busca : string = '';
    

  constructor(private service : ServiceManagerService) { 
    
    this.myArray =[1,2];
    this.nav.home ='home';
    this.nav.men = ['Chaquetas','Jerseys','Pantalones'];
    this.nav.Women = ['Chaquetas','Jerseys','Pantalones'];
    this.nav.contact = 'Contact';
    
  
    

  }

  ngOnInit(): void {
  }

  setSearch(search : IseachForm){


    // this.service.pushManagerService_search(search);
  
 


  }
 

  

}
;
