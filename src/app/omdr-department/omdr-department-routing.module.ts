import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmdrDepartmentComponent } from './omdr-department/omdr-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';

const routes: Routes = [
  {
    path:"",
    component:OmdrDepartmentComponent,
    children:[
      {
        path:"",
        redirectTo:"dashboard",
        pathMatch:"full"
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
        path:"patient-info/:id",
        component:PatientInfoComponent
      },
      {
        path:"register-complaint/:id",
        component:RegisterComplaintComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmdrDepartmentRoutingModule { }
