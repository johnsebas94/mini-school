import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterStudentComponent } from './admin/register-student/register-student.component';
import { RegisterTeacherComponent } from './admin/register-teacher/register-teacher.component';
import { RegisterSubjectComponent } from './admin/register-subject/register-subject.component';
import { RegisterGradeComponent } from "./admin/register-grade/register-grade.component";


//Import Services
import { UserService } from './services/user.service';
import { GradeService } from "./services/grade.service";
import { StudentService } from './services/student.service';
import { SubjectService } from './services/subject.service';
import { TeacherService } from './services/teacher.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importar formularios y http
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Importar elementos de Material design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    RegisterSubjectComponent,
    RegisterGradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [
    StudentService,
    TeacherService,
    SubjectService,
    GradeService,
    TokenInterceptorService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
