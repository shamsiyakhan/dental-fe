import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { PatientComponent } from './patient/patient.component';
import { MatTableModule } from '@angular/material/table';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { PatientTreatmentDiagnosisComponent } from './patient-treatment-diagnosis/patient-treatment-diagnosis.component';
import { NgChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { TestComponent } from './test/test.component';
import { MatCardModule } from '@angular/material/card';
import { ReportComponent } from './report/report.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ClerkComponent } from './clerk/clerk.component';
import { TreatmentDialogComponent } from './treatment-dialog/treatment-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { EditTreatmentComponent } from './edit-treatment/edit-treatment.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { A11yModule } from "@angular/cdk/a11y";
import { DetailedReportsComponent } from './detailed-reports/detailed-reports.component';
import { AccountantComponent } from './accountant/accountant.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PatientComponent,
    PatientTreatmentComponent,
    PatientTreatmentDiagnosisComponent,
    ProfileComponent,
    DepartmentComponent,
    DepartmentInfoComponent,
    ViewProfileComponent,
    ClerkComponent,
    TestComponent,
    ReportComponent,
    TreatmentDialogComponent,
    EditTreatmentComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    DetailedReportsComponent,
    AccountantComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    NgChartsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatInputModule,
    A11yModule
]
})
export class AdminModule { }
