import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {
private flag:boolean=false;
  constructor() { }
  isAuthenicate():boolean
  {
   if(this.flag){ return true;}
   else { return false;}
  }
  setFlag(fg:boolean):void
  {
   this.flag=fg;
  }
}
