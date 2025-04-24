import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegitrationComponent } from './regitration/regitration.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    PatientComponent,
    DashboardComponent,
    RegitrationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
