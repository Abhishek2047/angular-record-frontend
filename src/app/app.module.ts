import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, NgModel, FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './services/studentService';
import { HeaderComponent } from './header/header.component';
import { StudentUpadteService } from './services/student-upadte.service';
import { StudentCrudModule } from './StudentCrud/student-crud.module';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { GaurdService } from './services/gaurd.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentdetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentCrudModule,
    FormsModule
  ],
  providers: [StudentService,StudentUpadteService,GaurdService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
