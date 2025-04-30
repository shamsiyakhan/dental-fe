import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { PatientComponent } from './patient/patient.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { PatientTreatmentDiagnosisComponent } from './patient-treatment-diagnosis/patient-treatment-diagnosis.component';
import { NgChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PatientComponent,
    PatientTreatmentComponent,
    PatientTreatmentDiagnosisComponent,
    ProfileComponent,
    DepartmentComponent,
    DepartmentInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    HttpClientModule,
    NgChartsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
