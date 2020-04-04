import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentUpadteService } from '../services/student-upadte.service';
import { Student } from '../model/student';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { StudentService } from '../services/studentService';
import { Router } from '@angular/router';

@Component({
    selector : 'app-update',
    templateUrl : './studentUpdate.component.html'
})
export class StudentUpdateComponent implements OnInit {
    private student: Student;
    @ViewChild('contactForm', null) contactForm: NgForm;
    // updateForm: FormGroup;
    constructor(private stuUpdate: StudentUpadteService,private update:StudentService,
      private route:Router) {}
    ngOnInit(): void {
       
        console.log( this.student = this.stuUpdate.getUpdateStudent());
    //     this.updateForm = new FormGroup({
    //        name = new FormControl('this.student.firstName'),
           
    //    });
    setTimeout(() => {
        this.contactForm.setValue(this.stuUpdate.getUpdateStudent());
      });
    }
   
  onSubmit() {
    console.log("change",this.contactForm.value);
    let studentU:Student=this.contactForm.value;
    this.update.updateStudebt(studentU,studentU.id)
    .subscribe((data)=>{
        console.log(data);
        this.route.navigate(['detail']);
    },
    (error)=>{
       console.log(error);
       this.route.navigate(['detail']);
    });
  }
}
