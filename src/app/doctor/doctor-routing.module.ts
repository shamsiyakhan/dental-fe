import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';


const routes: Routes = [
  {
    path:"",
    component:OverviewComponent,
    children:[
      { 
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'patientTreatment',
        component:PatientTreatmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
