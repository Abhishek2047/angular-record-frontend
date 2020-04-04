import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { Injectable } from '@angular/core';
@Injectable()
export class StudentService {

   

    private urls = 'http://localhost:8084/';
constructor(private http: HttpClient) {}
getStudentDetails() {
return this.http.get<Student[]>(this.urls+'students');
}
updateStudebt(udate: Student, id: number) {
return this.http.put<any>(this.urls +'student'+'/'+id,udate);
}
setOrder() {
    return this.http.get<Student[]>(this.urls+'setOrder'); 
} 
addStudent(stu: Student) {
    console.log(stu);
   return this.http.post(this.urls+'student',stu);
}
deleteStudent(id: number) {
   return this.http.delete(this.urls+'student'+'/'+id);
  }
}

