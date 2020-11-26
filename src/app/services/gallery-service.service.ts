import { Injectable } from '@angular/core';
import { Igallery } from '../component/body/gallery/Igallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  public gallery : Igallery | any = {}
  public gallery1 : Igallery | any = {}
  foto : Igallery | any = {}

  constructor() { 
    this.gallery.img = "imagen 1"     }


  getGalleryServiceService(){
    return this.gallery;
  }

  pushGalleryServiceService(photo : Igallery){
    this.foto = photo;
    return this.gallery;
  }
}
