
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentUpdateComponent } from './studentUdate.component';
import { StudentInsertComponent } from './studentInsert.component';
import { GaurdService } from '../services/gaurd.service';
import { DeactiveService } from '../services/deactive.service';
const routes: Routes=[
    {path:'update', component : StudentUpdateComponent, canActivate:[GaurdService],canDeactivate:[DeactiveService]},
    {path:'inster', component : StudentInsertComponent,canDeactivate:[DeactiveService]}
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class StudentCurdRoutingModule{}