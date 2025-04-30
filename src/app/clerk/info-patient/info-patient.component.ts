import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.scss']
})
export class InfoPatientComponent implements OnInit {

  patient:any
  patientForm = this.fb.group({
        fullname: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        emergency_name: [''],
        emergency_contact: [''],
        address: ['', Validators.required],
        dob: [''],
        gender: [''],
        marital_status: [''],
        registration_payment_type:['']
      });
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:any)=>{
      console.warn(params['id'])
      this.http.get(`http://localhost:3000/getpatient/${params['id']}`).subscribe((data:any)=>{
        console.warn(data)
        this.patient=data[0]
        this.patientForm.patchValue(data[0])
      })
    })
  }

  Update(){
    this.http.post(`http://localhost:3000/update-patient/${this.patient.userid}`,this.patientForm.value).subscribe((data:any)=>{
      this.patient=data.user
      this.patientForm.patchValue(data.user)
  })


  }
}
