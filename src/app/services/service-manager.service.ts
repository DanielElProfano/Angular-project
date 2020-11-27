import { Injectable } from '@angular/core';
import {Iform} from '../component/body/form/Iform';
import { Igallery } from '../component/body/gallery/Igallery';
import { GalleryServiceService } from './gallery-service.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceManagerService {

  public form : Iform | any= {};
   search :string[] =[];
   searchService : Igallery | any ={};

  constructor(private galleryServiceService: GalleryServiceService) { 
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
  // public pushManagerService_search( pushea : string){
    
  //   debugger
  //   this.search[0] = pushea;
  //   this.searchService.description = pushea;
  //   this.galleryServiceService.pushGalleryServiceService(pushea);
  //   return this.getManagerService_search();
  // }
}
