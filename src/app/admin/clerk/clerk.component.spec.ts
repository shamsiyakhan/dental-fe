import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkComponent } from './clerk.component';

describe('ClerkComponent', () => {
  let component: ClerkComponent;
  let fixture: ComponentFixture<ClerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClerkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
