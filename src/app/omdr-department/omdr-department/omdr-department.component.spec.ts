import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdrDepartmentComponent } from './omdr-department.component';

describe('OmdrDepartmentComponent', () => {
  let component: OmdrDepartmentComponent;
  let fixture: ComponentFixture<OmdrDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmdrDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmdrDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
