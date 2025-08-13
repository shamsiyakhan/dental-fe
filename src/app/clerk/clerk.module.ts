import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClerkRoutingModule } from './clerk-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoPatientComponent } from './info-patient/info-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PatientDocumentComponent } from './patient-document/patient-document.component';
@NgModule({
  declarations: [
    OverviewComponent,
    AddpatientComponent,
    DashboardComponent,
    InfoPatientComponent,
    PatientHistoryComponent,
    PatientAppointmentComponent,
    PatientDocumentComponent
  ],
  imports: [
    CommonModule,
    ClerkRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonToggleModule
  ]
})
export class ClerkModule { }
