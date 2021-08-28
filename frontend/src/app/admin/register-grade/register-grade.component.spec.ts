import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterGradeComponent } from './register-grade.component';

describe('RegisterGradeComponent', () => {
  let component: RegisterGradeComponent;
  let fixture: ComponentFixture<RegisterGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
