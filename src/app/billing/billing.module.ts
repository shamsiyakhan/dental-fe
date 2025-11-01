import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { PendingComponent } from './pending/pending.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PendingComponent,
    PatientListComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
