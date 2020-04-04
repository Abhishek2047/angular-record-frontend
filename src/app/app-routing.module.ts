import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '' , component : StudentdetailsComponent},
  {path: 'detail' , component : StudentdetailsComponent},
  {path: 'login' , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
