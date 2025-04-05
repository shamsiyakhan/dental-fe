import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmdrDepartmentRoutingModule } from './omdr-department-routing.module';
import { OmdrDepartmentComponent } from './omdr-department/omdr-department.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    OmdrDepartmentComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OmdrDepartmentRoutingModule
  ]
})
export class OmdrDepartmentModule { }
