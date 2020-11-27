import { Component, OnInit } from '@angular/core';
import { ServiceManagerService } from 'src/app/services/service-manager.service';
import { GalleryServiceService } from '../../../services/gallery-service.service';
import { Igallery } from './Igallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  public search : string[]=[];
  public fotos : Igallery | any = {};
  public array : Igallery[] = [];
 
  constructor(public  galleryServiceService : GalleryServiceService) { 
    
  
      
  
  }
  ngOnInit(): void{
    
  //  this.serviceManagerService.pushManagerService_search(this.var);
  //  this.search = this.serviceManagerService.getManagerService_search();
    debugger
    this.fotos.description = this.search;
  //  this.galleryServiceService.pushGalleryServiceService(this.fotos);
   this.array = this.galleryServiceService.muestraImagenesOnInit();
    
  }
  buscador(search: string[] ){


    
  }


}
