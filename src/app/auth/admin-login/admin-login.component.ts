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
  url:any
  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private http:HttpClient,
    private router:Router
  ) { }

  loginForm = this.fb.group({
    username:[''],
    password:['']
  })

  ngOnInit(): void {
    this.url = this.api.url
  }

  onSubmit(){
    console.warn(this.loginForm.value)
    this.http.post(this.url+'/admin-login',this.loginForm.value).subscribe((data:any)=>{
      this.router.navigate(['/admin/dashboard'])
    }, (error)=>{
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.error
      })
    }
    )
  }

}
