import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTeacherPageComponent } from './load-teacher-page.component';

describe('LoadTeacherPageComponent', () => {
  let component: LoadTeacherPageComponent;
  let fixture: ComponentFixture<LoadTeacherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadTeacherPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
