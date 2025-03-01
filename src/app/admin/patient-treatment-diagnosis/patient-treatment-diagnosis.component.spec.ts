import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTreatmentDiagnosisComponent } from './patient-treatment-diagnosis.component';

describe('PatientTreatmentDiagnosisComponent', () => {
  let component: PatientTreatmentDiagnosisComponent;
  let fixture: ComponentFixture<PatientTreatmentDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTreatmentDiagnosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTreatmentDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
