import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConsultationComponent } from './info-consultation.component';

describe('InfoConsultationComponent', () => {
  let component: InfoConsultationComponent;
  let fixture: ComponentFixture<InfoConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
