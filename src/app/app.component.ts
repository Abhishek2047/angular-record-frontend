import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { StudentService } from './services/studentService';
import { Key } from 'protractor';
import { StudentUpadteService } from './services/student-upadte.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'order-app';
  // studentDetail: any[] = [ ['abhimayu', 'kumar', 'patna'], ['love', 'lust', 'prem']];

}
