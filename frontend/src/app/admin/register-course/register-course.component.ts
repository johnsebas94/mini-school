import { Component, OnInit } from '@angular/core';

import { CourseService } from "../../services/course.service";
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {
  registerCourseData: any;
  courseMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _courseService: CourseService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { 
    this.registerCourseData ={}; //Este es un json vacio
    this.courseMessage = '';
  }

  ngOnInit(): void {
  }
  registerCourse() {}

  openSnackBarSuccesfull() {}

  openSnackBarError() {}
}
