import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule
  ]
})
export class AccountantModule { }
