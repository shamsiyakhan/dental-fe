import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { PatientTreatmentDiagnosisComponent } from './patient-treatment-diagnosis/patient-treatment-diagnosis.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentInfoComponent } from './department-info/department-info.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ClerkComponent } from './clerk/clerk.component';
import { TestComponent } from './test/test.component';
import { ReportComponent } from './report/report.component';
import { DetailedReportsComponent } from './detailed-reports/detailed-reports.component';
import { AccountantComponent } from './accountant/accountant.component';

const routes: Routes = [
  {
    path:"",
    component:OverviewComponent,
    
    children:[
      {
        path:"",
        redirectTo: "dashboard", 
        pathMatch: "full" 
      },
      {
        path:"dashboard",
        component:DashboardComponent
       },
       {
        path:"patient",
        component:PatientComponent
       },
       {
        path:"patient/:id",
        component:PatientTreatmentComponent
       },
       {
        path:"patient/treatment/:id",
        component:PatientTreatmentDiagnosisComponent
       },
       {
        path:'profile',
        component:ProfileComponent
       },
       {
        path:'department',
        component:DepartmentComponent
       },
       {
        path:'departInfo/:id',
        component:DepartmentInfoComponent
       },
       {
        path:'view-pro',
        component:ViewProfileComponent
       },
       {
        path:"clerk",
        component:ClerkComponent
       },
       {
        path:'test',
        component:TestComponent
       },
       {
        path:'report',
        component:ReportComponent
       },
       {
        path:"detailed-reports",
        component:DetailedReportsComponent
       },
        {
        path:"accountant",
        component:AccountantComponent
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
