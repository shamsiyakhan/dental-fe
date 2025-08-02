import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  url: any
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private http: HttpClient,
    private router: Router
  ) { }

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  })

  ngOnInit(): void {
    this.url = this.api.url
  }

  onSubmit() {
    let data
    if (this.loginForm.value.password) {
      data = {
        email: this.loginForm.value.username,
        password: window.btoa(this.loginForm.value.password)
      }
    }

    console.warn(this.loginForm.value)
    this.http.post(this.url + '/admin-login', data).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error
        });
      }
    });

  }

}
