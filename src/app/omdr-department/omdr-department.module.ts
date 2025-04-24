import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmdrDepartmentRoutingModule } from './omdr-department-routing.module';
import { OmdrDepartmentComponent } from './omdr-department/omdr-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
@NgModule({
  declarations: [
    OmdrDepartmentComponent,
    DashboardComponent,
    PatientComponent,
    PatientInfoComponent,
    RegisterComplaintComponent
  ],
  imports: [
    CommonModule,
    OmdrDepartmentRoutingModule,
    HttpClientModule,
    MatTabsModule
  ]
})
export class OmdrDepartmentModule { }
