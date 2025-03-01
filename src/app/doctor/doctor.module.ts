import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    OverviewComponent,
    DashboardComponent,
    PatientTreatmentComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class DoctorModule { }
