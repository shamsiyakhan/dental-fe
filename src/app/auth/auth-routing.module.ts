import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthOverviewComponent } from './auth-overview/auth-overview.component';
import { SignupComponent } from './signup/signup.component';
import { DepartmentLoginComponent } from './department-login/department-login.component';
import { ClerkLoginComponent } from './clerk-login/clerk-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';

const routes: Routes = [
  {
    path:"",
    component:AuthOverviewComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"admin-login",
        component:AdminLoginComponent
      },
      {
        path:"signup",
        component:SignupComponent
      },
      {
        path:"department-login",
        component:DepartmentLoginComponent
      },
      {       
        path:"clerk-login",
        component:ClerkLoginComponent
      },
      {
        path:"doctor-login",
        component:DoctorLoginComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
