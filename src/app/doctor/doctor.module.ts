import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { DoctorRoutingModule } from './doctor-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { MatTableModule } from '@angular/material/table';
import { DoctorComponent } from './doctor/doctor.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './personal/personal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalComponent } from './professional/professional.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { InfoConsultationComponent } from './info-consultation/info-consultation.component';
import { FormsModule } from '@angular/forms';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';

@NgModule({
  declarations: [
    OverviewComponent,
    DashboardComponent,
    PatientTreatmentComponent,
    DoctorComponent,
    ProfileComponent,
    PersonalComponent,
    ProfessionalComponent,
    ConsultationComponent,
    InfoConsultationComponent,
    AppointmentListComponent,
    AppointmentUpdateComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DoctorModule { }
