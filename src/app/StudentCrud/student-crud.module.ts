import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentUpdateComponent } from './studentUdate.component';
import { StudentCurdRoutingModule } from './studentCurd-routing.module';
import { StudentInsertComponent } from './studentInsert.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentUpdateComponent,
    StudentInsertComponent
  ],
  imports: [
    CommonModule,
    StudentCurdRoutingModule,
    FormsModule
  ]
})
export class StudentCrudModule { }
