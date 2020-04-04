import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private UserDetail:User[]=[new User('Abhimanyu',12345),new User('dilip',09876)];
  UserDetail = [ ['abhimanyu',1234],['dilip',12345]];
  constructor() { }
  matchUser(user:User):boolean {
    for(let s of this.UserDetail){
      if(s[0] ===user.user)
      {
        if(s[1] === user.passw)
        {
           return true;
        }
        else
          {
           return false;
          }
      }
      else
      {
        return false;
      }
    }
  }
}
