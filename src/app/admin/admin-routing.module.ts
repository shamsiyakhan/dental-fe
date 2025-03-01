import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { PatientTreatmentDiagnosisComponent } from './patient-treatment-diagnosis/patient-treatment-diagnosis.component';

const routes: Routes = [
  {
    path:"",
    component:OverviewComponent,
    children:[
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
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
