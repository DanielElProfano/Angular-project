
import { Injectable } from '@angular/core';
import { Igallery } from '../component/body/gallery/Igallery';
// import { ServiceManagerService } from './service-manager.service';


@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  // public gallery : Igallery | any = {}
  // public gallery1 : Igallery | any = {}
  desc : string = '';
  fotos : Igallery[];
  atributo : Igallery | any = {}
  array : Igallery[] =[];

  constructor() { 

    this.fotos = [{
      img : "https://cdnx.jumpseller.com/bundle/image/388943/thumb/230/260?1433521152",
      alt : "texto alternativo",
      description : "chaqueta",
      price : 120,
      color : "blue"
    },
    {
      
      img : "https://cdnx.jumpseller.com/bundle/image/409914/thumb/230/260?1437135516",
      alt : "texto alternativo",
      description : "jersey",
      price : 120,
      color : "red"
     }
    ];


      
    
  
  }

  getGalleryServiceService(){
    
    return this.array;
  }
  pushFoto(foto: Igallery){
    this.fotos.push(foto);
    

  }
  // pushGalleryServiceService(photo : string){
  //   // this.desc = photo;
  //   this.array = []
  //   this.fotos.forEach((foto) =>{
  //     console.log(foto)
        

  //       if(photo === foto.description){

  //         this.array.push(foto);


  //       }
  //       console.log(foto.description)
      
        
  //     });
  //     return this.getGalleryServiceService();
  //   }
    muestraImagenesOnInit(){
      return this.fotos
    }


}
