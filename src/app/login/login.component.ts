import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { AuthenicateService } from '../services/authenicate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm: NgForm;
  users: User;
  constructor(private userService: UserService,private auth:AuthenicateService,
    private rout:Router) { }

  ngOnInit() {
    this.users = new User('asd', 123);

  }

onSubmit(user: NgForm) {
this.users = user.value;
console.log( this.users);
let flg=this.userService.matchUser(this.users);
this.auth.setFlag(flg);
this.rout.navigate(['detail']);
}
}
