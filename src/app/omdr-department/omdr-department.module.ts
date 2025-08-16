import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmdrDepartmentRoutingModule } from './omdr-department-routing.module';
import { OmdrDepartmentComponent } from './omdr-department/omdr-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AssignDepartmentComponent } from './assign-department/assign-department.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentAssignComponent } from './appointment-assign/appointment-assign.component';
import { FormsModule } from '@angular/forms';
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
    AllappointmentComponent,
    AssignDepartmentComponent,
    AppointmentAssignComponent
  ],
  imports: [
    CommonModule,
    OmdrDepartmentRoutingModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ]
})
export class OmdrDepartmentModule { }
