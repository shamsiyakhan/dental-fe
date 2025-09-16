import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOnboardingComponent } from './doctor-onboarding.component';

describe('DoctorOnboardingComponent', () => {
  let component: DoctorOnboardingComponent;
  let fixture: ComponentFixture<DoctorOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorOnboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
