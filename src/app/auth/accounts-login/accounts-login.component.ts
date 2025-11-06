import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts-login',
  templateUrl: './accounts-login.component.html',
  styleUrls: ['./accounts-login.component.scss']
})
export class AccountsLoginComponent implements OnInit {

  url: any
  hidePassword: boolean = true;
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

  hideUnhidePassword() {}

  onSubmit() {
    let data
    if (this.loginForm.value.password) {
      data = {
        email: this.loginForm.value.username,
        password: window.btoa(this.loginForm.value.password)
      }
    }

    console.warn(this.loginForm.value)
    this.http.post(this.url + '/accountantLogin', data).subscribe({
      next: (data: any) => {
        localStorage.setItem('id', data.user.admin_id);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/billing/dashboard']);
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
