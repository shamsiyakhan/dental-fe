import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentDetailsComponent } from './treatment-details/treatment-details.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  {
    path:"",
    component:PatientComponent,
    children:[
      {
        path:"",
        redirectTo:'dashboard',
        pathMatch:"full"
      },
      {
        path:"registration",
        component:RegistrationComponent
      },
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"treatment",
        component:TreatmentComponent
      },
      {
        path:"treatment-details/:id",
        component:TreatmentDetailsComponent
      },
      {
        path:"patient-profile",
        component:PatientProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
