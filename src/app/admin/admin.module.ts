import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { PatientComponent } from './patient/patient.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { PatientTreatmentDiagnosisComponent } from './patient-treatment-diagnosis/patient-treatment-diagnosis.component';
@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PatientComponent,
    PatientTreatmentComponent,
    PatientTreatmentDiagnosisComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class AdminModule { }
