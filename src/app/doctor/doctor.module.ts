import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { DoctorRoutingModule } from './doctor-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { DoctorComponent } from './doctor/doctor.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './personal/personal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalComponent } from './professional/professional.component';
@NgModule({
  declarations: [
    OverviewComponent,
    DashboardComponent,
    PatientTreatmentComponent,
    DoctorComponent,
    ProfileComponent,
    PersonalComponent,
    ProfessionalComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
