import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentUpadteService {
 private student:Student;
  constructor() { }
setUpdateStudent(stu:Student):void{
this.student=stu;
}
getUpdateStudent():Student{
  return this.student;
}

}
