import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {


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
    let data
    if(this.loginForm.value.password){
       data={
        email:this.loginForm.value.username,
        password:window.btoa(this.loginForm.value.password)
      }
    }
   
    console.warn(this.loginForm.value)
    this.http.post(this.url+'/doctor-login',data).subscribe((data:any)=>{
      localStorage.setItem('doctor',JSON.stringify(data.user.doctor))
      localStorage.setItem('department',JSON.stringify(data.user.department))
      this.router.navigate(['/doctor/dashboard'])
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
