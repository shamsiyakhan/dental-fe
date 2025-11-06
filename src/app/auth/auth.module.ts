import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthRoutingModule } from './auth-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { AuthOverviewComponent } from './auth-overview/auth-overview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { DepartmentLoginComponent } from './department-login/department-login.component';
import { ClerkLoginComponent } from './clerk-login/clerk-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorOnboardingComponent } from './doctor-onboarding/doctor-onboarding.component';
import { AccountsLoginComponent } from './accounts-login/accounts-login.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    LoginComponent,
    AuthOverviewComponent,
    SignupComponent,
    DepartmentLoginComponent,
    ClerkLoginComponent,
    DoctorLoginComponent,
    DoctorOnboardingComponent,
    AccountsLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule
  ]
})
export class AuthModule { }
