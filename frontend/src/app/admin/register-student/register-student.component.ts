import { Component, OnInit } from '@angular/core';

import { StudentService } from "../../services/student.service";
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  registerStudentData: any;
  studentMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _studentService: StudentService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerStudentData ={}; //Este es un json vacio
    this.studentMessage = '';
   }

  ngOnInit(): void {
  }
  registerStudent() {}

  openSnackBarSuccesfull() {}

  openSnackBarError() {}
}
