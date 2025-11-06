import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLoginComponent } from './accounts-login.component';

describe('AccountsLoginComponent', () => {
  let component: AccountsLoginComponent;
  let fixture: ComponentFixture<AccountsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
