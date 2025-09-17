import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalComponent } from './personal/personal.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { InfoConsultationComponent } from './info-consultation/info-consultation.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { TreatmentComponent } from './treatment/treatment.component';


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
        path:'consultation',
        component:ConsultationComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'personal',
        component:PersonalComponent
      },
      {
        path:'info-consultation',
        component:InfoConsultationComponent
      },
      {
        path:"appointment",
        component:AppointmentListComponent
      },{
        path:"appointment-update",
        component:AppointmentUpdateComponent
      },
      {
        path:"treatment",
        component:TreatmentComponent
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
