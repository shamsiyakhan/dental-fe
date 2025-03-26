import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/commanServices/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url:any
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
    private api:ApiService,
    private router:Router
  ) { }

  loginForm=this.fb.group({
    email:[''],
    password:['']
  })

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['auth/signup'])
  }
  onSubmit(){
    this.http.post(this.api.url+'/login',this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.msg.roleid==5){
        this.router.navigate(['/doctor/dashboard'])
      }
    },(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.error
      })
    })
  }

}
