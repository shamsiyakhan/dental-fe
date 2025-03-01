import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthOverviewComponent } from './auth-overview/auth-overview.component';

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
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
