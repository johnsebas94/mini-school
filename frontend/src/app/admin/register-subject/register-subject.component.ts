import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../../services/subject.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register-subject',
  templateUrl: './register-subject.component.html',
  styleUrls: ['./register-subject.component.css'],
})
export class RegisterSubjectComponent implements OnInit {
  registerSubjectData: any;
  subjectMessage: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _subjectService: SubjectService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerSubjectData = {}; //Este es un json vacio
    this.subjectMessage = '';
  }

  ngOnInit(): void {}
  registerSubject() {
    if (
      !this.registerSubjectData.subject ||
      !this.registerSubjectData.code ||
      !this.registerSubjectData.grade
    ) {
      console.log('Failed process: Incomplete Data');
      this.subjectMessage = 'Failed process: Incomplete Data';
      this.openSnackBarError();
      this.registerSubjectData = {};
    } else {
      this._subjectService.registerSubject(this.registerSubjectData).subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this._router.navigate(['/login']);
          this.subjectMessage = 'Succesfull Subject register';
          this.openSnackBarSuccesfull();
          this.registerSubjectData = {};
        },
        (err) => {
          console.log(err);
          this.subjectMessage = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.subjectMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.subjectMessage, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
