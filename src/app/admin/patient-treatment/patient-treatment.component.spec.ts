import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTreatmentComponent } from './patient-treatment.component';

describe('PatientTreatmentComponent', () => {
  let component: PatientTreatmentComponent;
  let fixture: ComponentFixture<PatientTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
