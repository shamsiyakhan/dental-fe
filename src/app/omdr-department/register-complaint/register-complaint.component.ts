import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-complaint',
  templateUrl: './register-complaint.component.html',
  styleUrls: ['./register-complaint.component.scss']
})
export class RegisterComplaintComponent implements OnInit {

  patientInfo:any
  patientId:any
  constructor(
    private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      console.warn(params)
      console.warn(params)
      this.patientId=params.id

      this.http.get(`http://localhost:3000/getPatient/${this.patientId}`).subscribe((res:any)=>{
        console.warn(res)
        this.patientInfo=res[0]
      })
    })
  }

}
