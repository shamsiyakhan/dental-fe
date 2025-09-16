import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-onboarding',
  templateUrl: './doctor-onboarding.component.html',
  styleUrls: ['./doctor-onboarding.component.scss']
})
export class DoctorOnboardingComponent implements OnInit {
  doctor: any;
  doctorForm!: FormGroup;
  showPassword: boolean = false;
  doctorId:any
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Sample API response
    /* this.doctor = {
      doctor_id: "oxNDA1angm",
      fullname: "Shamsiya Khan",
      email: "shamsiyadoc@gmail.com",
      phone_no: "7841849748"
    }; */
    this.route.params.subscribe(params => {
      this.doctorId = params['docId'];
      console.log(this.doctorId); 
      this.getDoctor();
    });
    this.doctorForm = this.fb.group({
      password: ['', Validators.required],
      experience: ['', Validators.required],
      degree: [''],
      phone_no: [],
      address: [''],
      marital_status: [''],
      gender: [''],
      dob: [''],
      qualification: [''],
      specialization: [''],
      biography: ['']
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  getDoctor() {
    this.http.get('http://localhost:3000/api/getDoctorDetail/' + this.doctorId).subscribe((res: any) => {
      this.doctor = res.result[0];
      console.warn(this.doctor);
      console.warn(res.result.length)
      if(res.result.length==0) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Doctor ID',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['auth/doctor-login']);
      }
    });
  }

  onSubmit() {
    console.warn("submit called")
    if (this.doctorForm.valid) {
      const formData = {
        doctor_id: this.doctorId,
        password: window.btoa(this.doctorForm.value.password),
        ...this.doctorForm.value
      };
      console.log("Final Onboarding Data:", formData);
      // Here you can call your API with formData
      this.http.post('http://localhost:3000/api/OnboardingComplete', formData).subscribe(response => {
        console.log('Onboarding successful', response);
        Swal.fire({
          icon: 'success',
          title: 'Onboarding Successfull Proceed to Login',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['auth/doctor-login']);
      });
    }
  }
}