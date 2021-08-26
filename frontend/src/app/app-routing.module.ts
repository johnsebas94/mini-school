import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './admin/register-course/register-course.component';
import { RegisterStudentComponent } from './admin/register-student/register-student.component';
import { RegisterSubjectComponent } from './admin/register-subject/register-subject.component';
import { RegisterTeacherComponent } from './admin/register-teacher/register-teacher.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
  },
  {
    path: 'registerSubject',
    component: RegisterSubjectComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
