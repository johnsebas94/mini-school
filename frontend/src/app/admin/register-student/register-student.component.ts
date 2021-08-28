import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  registerStudentData: any;
  studentMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _studentService: StudentService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerStudentData = {};
    this.studentMessage = '';
  }

  ngOnInit(): void {}
  registerStudent() {
    if (
      !this.registerStudentData.name ||
      !this.registerStudentData.code ||
      !this.registerStudentData.email ||
      !this.registerStudentData.grade ||
      !this.registerStudentData.password
    ) {
      console.log('Failed process: Incomplete Data');
      this.studentMessage = 'Failed process: Incomplete Data';
      this.openSnackBarError();
      this.registerStudentData = {};
    } else {
      this._studentService.registerStudent(this.registerStudentData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this._router.navigate(['/login']);
          this.studentMessage = 'Succesfull Student register';
          this.openSnackBarSuccesfull();
          this.registerStudentData = {};
        },
        (err) => {
          console.log(err);
          this.studentMessage = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.studentMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.studentMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
