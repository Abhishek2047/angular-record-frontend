import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { StudentInsertComponent } from '../StudentCrud/studentInsert.component';


@Injectable({
  providedIn: 'root'
})
export class DeactiveService implements CanDeactivate<StudentInsertComponent> {

  constructor() { }
  canDeactivate(component: StudentInsertComponent, currentRoute: import('@angular/router').ActivatedRouteSnapshot, currentState: import('@angular/router').RouterStateSnapshot, nextState?: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {

    if (confirm("Do you wish to Please confirm")) {
      return true
    } else {
      return false
    }

}
}