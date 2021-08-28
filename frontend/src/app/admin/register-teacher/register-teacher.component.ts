import { Component, OnInit } from '@angular/core';

import { TeacherService } from '../../services/teacher.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  registerTeacherData: any;
  teacherMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _teacherService: TeacherService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerTeacherData = {};
    this.teacherMessage = '';
  }

  ngOnInit(): void {}

  registerTeacher() {
    if (
      !this.registerTeacherData.name ||
      !this.registerTeacherData.code ||
      !this.registerTeacherData.email ||
      !this.registerTeacherData.subject ||
      !this.registerTeacherData.password
    ) {
      console.log('Failed process: Incomplete Data');
      this.teacherMessage = 'Failed process: Incomplete Data';
      this.openSnackBarError();
      this.registerTeacherData = {};
    } else {
      this._teacherService.registerTeacher(this.registerTeacherData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this._router.navigate(['/login']);
          this.teacherMessage = 'Succesfull Teacher register';
          this.openSnackBarSuccesfull();
          this.registerTeacherData = {};
        },
        (err) => {
          console.log(err);
          this.teacherMessage = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.teacherMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.teacherMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
