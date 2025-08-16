import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoPatientComponent } from './info-patient/info-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

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
          path:'dashboard',
          component:DashboardComponent

      },
      {
        path:'addpatient',
        component:AddpatientComponent
      },
      {
        path:'patientinfo/:id',
        component:InfoPatientComponent
      },
      {
        path:'patient-history/:id',
        component:PatientHistoryComponent
      },
      {
        path:'patient-appointment',
        component:PatientAppointmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClerkRoutingModule { }
