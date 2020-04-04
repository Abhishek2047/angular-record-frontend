import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/studentService';
import { StudentUpadteService } from '../services/student-upadte.service';
import { Student } from '../model/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
   flag: boolean = true;
  studentDetail: Student [];
  stud: Student;
  num = 1;
constructor(private stuService: StudentService,private stUpdate:StudentUpadteService,
  private route:Router) {}
  ngOnInit(): void {
   this.stuService.getStudentDetails()
   .subscribe((res) => {
     console.log(res);
     this.studentDetail = res;
   },
   (error) => {
       console.log(error);
   });
  }
  updateStud(stu:Student)
  {
    this.stUpdate.setUpdateStudent(stu);
    this.route.navigate(['update']);
   
  }
setOder(){
  if(this.flag==true){
 this.stuService.setOrder().
 subscribe((res)=>{
  console.log(res);
   this.studentDetail=res;
   
 },
 (error)=>{
   console.log(error);
 });
 this.flag=false;
}
else{
  this.ngOnInit();
  this.flag=true;
 
}
}
addStu()
{
this.route.navigate(['inster']);
}
deleteStud(stu:Student){
  let id =stu.id;
  this.stuService.deleteStudent(id).subscribe(
    (res)=>{
      console.log(res);
      this.ngOnInit();
    },
    (error)=>{
      console.log(error);
    }
  );
}
}
