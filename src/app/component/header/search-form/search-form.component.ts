import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceManagerService } from 'src/app/services/service-manager.service';
import { IseachForm } from './IsearchForm';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<IseachForm>();
  public searchForm: IseachForm | any = {};
  public submitted = false;
  public busqueda : string ='';
  constructor(private formbuilder : FormBuilder, private serviceNanagerService : ServiceManagerService) { 

    this.searchForm = this.formbuilder.group({
      search: ['',[Validators.minLength(2)]],
    });

    
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.searchForm.valid) {
      // Creamos un Usuario y lo emitimos
      const search: IseachForm = {
        search: this.searchForm.get('search').value,
       
      };
      
      // Reseteamos todos los campos y el indicador de envío o submitted
      this.busqueda = search.search;
      debugger
      // this.serviceNanagerService.pushManagerService_search(this.busqueda);
      this.searchForm.reset();
      this.submitted = false;
     
      
    }
  }


}
