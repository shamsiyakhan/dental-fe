import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAssignComponent } from './appointment-assign.component';

describe('AppointmentAssignComponent', () => {
  let component: AppointmentAssignComponent;
  let fixture: ComponentFixture<AppointmentAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
