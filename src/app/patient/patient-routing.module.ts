import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
