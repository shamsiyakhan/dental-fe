import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingModule } from './billing.module';
import { BillingComponent } from '../accountant/billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './overview/overview.component';
import { PendingComponent } from './pending/pending.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PaymentComponent } from './payment/payment.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { QrPaymentComponent } from './qr-payment/qr-payment.component';

const routes: Routes = [

  {
    path: '',
    component: OverviewComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'pending',
        component: PendingComponent
      },
      {
        path: 'pateintList',
        component: PatientListComponent

      },
      {
        path: 'payment',
        component: PaymentComponent
      },
      {
        path: 'patients/:patientid',
        component: PatientDetailsComponent
      },
      {
        path:'qr',
        component:QrPaymentComponent
      }
    ]
  }



];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
