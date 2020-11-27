import { GalleryServiceService } from './../../../services/gallery-service.service';
import { Igallery } from './../gallery/Igallery';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGallery : FormGroup | any = null
  public submitted = false;
  constructor(private formbuilder: FormBuilder, private galleryServiceService: GalleryServiceService) { 

    this.formGallery = this.formbuilder.group({
      img: ['',[Validators.minLength(2)]],
      alt: ['',[Validators.minLength(2)]],
      // desription: ['',[Validators.minLength(2)]],
      price: ['',[Validators.minLength(2)]],
      color: ['',[Validators.minLength(2)]],

    })
  }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.formGallery.valid) {
      // Creamos un Usuario y lo emitimos
      const foto: Igallery = {
        img: this.formGallery.get('img').value,
        alt:this.formGallery.get('alt').value,
        // description: this.formGallery.get('description').value,
        price: this.formGallery.get('price').value,
        color: this.formGallery.get('color').value,
       
      };
      
      // Reseteamos todos los campos y el indicador de envío o submitted
      // this.busqueda = search.search;
      debugger
      console.log(foto);
      this.galleryServiceService.pushFoto(foto);
      this.formGallery.reset();
      this.submitted = false;
     
      
    }
  }
 
}
