import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegitrationComponent } from './regitration/regitration.component';
import { RegistrationComponent } from './registration/registration.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientComponent,
    DashboardComponent,
    RegitrationComponent,
    RegistrationComponent,
    TreatmentComponent,
    TreatmentDetailsComponent,
    PatientProfileComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule
  ]
})
export class PatientModule { }
