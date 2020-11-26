import { Injectable } from '@angular/core';
import {Iform} from '../component/body/form/Iform';


@Injectable({
  providedIn: 'root'
})
export class ServiceManagerService {

  public form : Iform | any= {};
   search :string[] =[];

  constructor() { 
  }
    
  

  public getManagerService_form():Iform{
    return this.form;
  }

  public pushManagerService_form(push : Iform){
    this.form = push;
  }
  public getManagerService_search(): string[]{

    
    return this.search;
    
  }
  public pushManagerService_search( pushea : string){
    
    
    this.search.push(pushea);
    return this.getManagerService_search();
  }
}
