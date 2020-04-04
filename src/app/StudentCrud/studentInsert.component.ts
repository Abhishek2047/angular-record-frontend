import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Student } from '../model/student';
import { StudentService } from '../services/studentService';
import { Router } from '@angular/router';

@Component({
selector : 'app-studentinsert',
templateUrl : './studentinsert.component.html'
})
export class StudentInsertComponent{
    contactForm: NgForm;
    constructor(private stuService:StudentService,private route:Router){}
    stu:Student;
    onSubmit(Stud:NgForm)
    {
       this.stu =Stud.value;
       console.log(this.stu);
       this.stuService.addStudent(this.stu).
       subscribe((res)=>{
       this.route.navigate(['detail']);
       },
       (error)=>{
        this.route.navigate(['detail']);
           console.log(error);
       });
    }
}