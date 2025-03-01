import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOverviewComponent } from './auth-overview.component';

describe('AuthOverviewComponent', () => {
  let component: AuthOverviewComponent;
  let fixture: ComponentFixture<AuthOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
