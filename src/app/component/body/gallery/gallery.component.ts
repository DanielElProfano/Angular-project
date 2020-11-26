import { Component, OnInit } from '@angular/core';
import { ServiceManagerService } from 'src/app/services/service-manager.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public search : string[]=[];
  var : string = "caraculo"
 
  constructor(public serviceManagerService: ServiceManagerService ) { 
    
   
   
      
  
  }
  ngOnInit(): void{

   this.serviceManagerService.pushManagerService_search(this.var);
   this.search = this.serviceManagerService.getManagerService_search();
    debugger;
    
  }


}
