import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'logout', redirectTo: 'auth/logout', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(r => r.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(r => r.AdminModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(r => r.DoctorModule)
  },
  {
    path:"omdr",
    loadChildren:()=> import('./omdr-department/omdr-department.module').then(r => r.OmdrDepartmentModule)
  },
  {
    path:"patient",
    loadChildren: () => import('./patient/patient.module').then(r => r.PatientModule)

  },
  {
    path:"clerk",
    loadChildren: () => import('./clerk/clerk.module').then(r => r.ClerkModule)

  },
  {
    path:"billing",
    loadChildren: () => import('./billing/billing.module').then(r => r.BillingModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
