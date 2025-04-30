import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {

  patientForm!: FormGroup;
  show=true
  activeStep: number = 1;
  download=false
  card=false
  addUserInfo:any
  constructor(private fb: FormBuilder,private http:HttpClient) {}

  ngOnInit() {
    this.patientForm = this.fb.group({
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
  }

  onSubmit() {
    console.warn("function called")
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);


      this.http.post('http://localhost:3000/register',this.patientForm.value).subscribe((data:any)=>{
        console.warn(data);
        this.addUserInfo=data.user
      })
      // Submit logic here
    } 
  }


  showcharges(){
    this.show=false;
    this.setStep(2)
  }

  showDownload(){
    this.download=true
    console.warn(this.patientForm.value)
    this.onSubmit()

  }


  setStep(step: number) {
    this.activeStep = step;
    console.warn(this.activeStep)
  }
  viewcard(){
    this.card=true
  }
}
