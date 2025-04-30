import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [
  {
    path:"",
    component:OverviewComponent,
    children:[
      { 
        path:"",
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      { 
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'patientTreatment',
        component:PatientTreatmentComponent
      },
      {
        path:'doctor',
        component:DoctorComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'personal',
        component:PersonalComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
