import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { PendingComponent } from './pending/pending.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PaymentComponent } from './payment/payment.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { QrPaymentComponent } from './qr-payment/qr-payment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    PendingComponent,
    PatientListComponent,
    PaymentComponent,
    PatientDetailsComponent,
    QrPaymentComponent,
    
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    FormsModule
    
  ]
})
export class BillingModule { }
