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
<<<<<<< HEAD
import { ClerkComponent } from './clerk/clerk.component';
import { TestComponent } from './test/test.component';
import { ReportComponent } from './report/report.component';
=======
import { TestComponent } from './test/test.component';
import { ReportComponent } from './report/report.component';
>>>>>>> 0eb2d787a6802d1b23667810c0f0f7ec908ca507

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
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
