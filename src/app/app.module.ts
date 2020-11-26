import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { GalleryComponent } from './component/body/gallery/gallery.component';

import { ServiceManagerService } from './services/service-manager.service';

import { FormComponent } from './component/body/form/form.component';
import { SearchFormComponent } from './component/header/search-form/search-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    GalleryComponent,
    FormComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServiceManagerService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
