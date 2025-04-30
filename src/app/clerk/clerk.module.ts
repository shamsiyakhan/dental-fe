import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClerkRoutingModule } from './clerk-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    OverviewComponent,
    AddpatientComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClerkRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClerkModule { }
