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
import { AppointmentComponent } from './appointment/appointment.component';
import { ReportComponent } from './report/report.component';
import { MatIconModule } from '@angular/material/icon';
import { TestComponent } from './test/test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { SettingComponent } from './setting/setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllappointmentComponent } from './allappointment/allappointment.component';
@NgModule({
  declarations: [
    OmdrDepartmentComponent,
    DashboardComponent,
    PatientComponent,
    PatientInfoComponent,
    RegisterComplaintComponent,
    AppointmentComponent,
    ReportComponent,
    TestComponent,
    ViewTestComponent,
    SettingComponent,
    AllappointmentComponent
  ],
  imports: [
    CommonModule,
    OmdrDepartmentRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule
    
  ]
})
export class OmdrDepartmentModule { }
