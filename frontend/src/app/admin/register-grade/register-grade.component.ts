import { Component, OnInit } from '@angular/core';

import { GradeService } from '../../services/grade.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-grade',
  templateUrl: './register-grade.component.html',
  styleUrls: ['./register-grade.component.css']
})
export class RegisterGradeComponent implements OnInit {

  registerGradeData: any;
  gradeMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _gradeService: GradeService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerGradeData = {};
    this.gradeMessage = '';
  }

  ngOnInit(): void {}
  registerGrade() {
    if (
      !this.registerGradeData.grade ||
      !this.registerGradeData.code ||
      !this.registerGradeData.number ||
      !this.registerGradeData.teacher
    ) {
      console.log('Failed process: Incomplete Data');
      this.gradeMessage = 'Failed process: Incomplete Data';
      this.openSnackBarError();
      this.registerGradeData = {};
    } else {
      this._gradeService.registerGrade(this.registerGradeData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this._router.navigate(['/login']);
          this.gradeMessage = 'Succesfull Grade Register';
          this.openSnackBarSuccesfull();
          this.registerGradeData = {};
        },
        (err) => {
          console.log(err);
          this.gradeMessage = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.gradeMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.gradeMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }

}
