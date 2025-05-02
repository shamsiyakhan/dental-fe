import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmdrDepartmentComponent } from './omdr-department/omdr-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { SettingComponent } from './setting/setting.component';
import { AllappointmentComponent } from './allappointment/allappointment.component';

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
      },
      {
        path:'appointment',
        component:AppointmentComponent
      },
      {
        path:'report',
        component:ReportComponent
      },
      {
        path:'test',
        component:TestComponent
      },
      {
        path:'viewtest',
        component:ViewTestComponent
      },
      {
        path:'allappointment',
        component:AllappointmentComponent
      },
      {
        path:'setting',
        component:SettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmdrDepartmentRoutingModule { }
