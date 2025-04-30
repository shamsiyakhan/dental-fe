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
      marital_status: ['']
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      this.patientForm.patchValue({
        password:window.btoa(this.patientForm.value.password)
      })


      this.http.post('http://localhost:3000/register',this.patientForm.value).subscribe(data=>{
        console.warn(data);
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
  }


  setStep(step: number) {
    this.activeStep = step;
    console.warn(this.activeStep)
  }
  viewcard(){
    this.card=true
  }
}
