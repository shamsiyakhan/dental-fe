import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClerkRoutingModule { }
