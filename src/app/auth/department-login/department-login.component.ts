import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-login',
  templateUrl: './department-login.component.html',
  styleUrls: ['./department-login.component.scss']
})
export class DepartmentLoginComponent implements OnInit {

  url: any
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private api: ApiService,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['auth/signup'])
  }
  onSubmit() {
    console.warn("logi called")
    let password = '';
    let data
    if (this.loginForm.value.password) {
      password = window.btoa(this.loginForm.value.password);
      data={
        dept_username: this.loginForm.value.email,
        password: password
      }
    }

    this.http.post(this.api.url + '/deptlogin', data).subscribe((data: any) => {
      console.log(data)
      localStorage.setItem('department_id', data.user.dept_id)
      if (data.user.dept_name == "OMDR") {
        this.router.navigate(['/omdr/dashboard'])
        localStorage.setItem("token" ,data.token)
      }else{
        this.router.navigate(['/department/dashboard'])
      }
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.error
      })
    })
  }



}
