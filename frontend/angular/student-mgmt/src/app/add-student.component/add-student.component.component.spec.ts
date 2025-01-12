import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentComponentComponent } from './add-student.component.component';

describe('AddStudentComponentComponent', () => {
  let component: AddStudentComponentComponent;
  let fixture: ComponentFixture<AddStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
