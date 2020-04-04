import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthenicateService } from './authenicate.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate  {
  flag:boolean=false;
  constructor(private route:Router,private auth:AuthenicateService) {}
  canActivate(_route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
 if(this.auth.isAuthenicate())
 {
   return true;
 }
 else
    this.route.navigate(['login']);
   
  }

}
