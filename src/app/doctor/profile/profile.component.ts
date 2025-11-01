import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  doctorForm!: FormGroup;
  doctor: string = localStorage.getItem('doctor') || '';
  doctorId:any

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      fullname: [''],
      email: [''],
      phone_no: [''],
      address: [''],
      gender: [''],
      dob: [''],
      marital_status: [''],
      degree: [''],
      qualification: [''],
      specialization: [''],
      experience: [''],
      biography: [''],
      onboarding_status: ['']
    });
    this.doctorId=JSON.parse(this.doctor).doctor_id
    this.loadDoctor();

  }

  loadDoctor() {
    this.http.get<any>(`http://localhost:3000/api/doctor/${this.doctorId}`)
      .subscribe(res => {
        this.doctorForm.patchValue(res.doctor);
      });
  }

  updateDoctor() {
    this.http.put(`http://localhost:3000/api/doctor/${this.doctorId}`, this.doctorForm.value)
      .subscribe({
        next: () => {
          Swal.fire('Success', 'Profile updated successfully', 'success');
        },
        error: (err) => {
          Swal.fire('Error', 'Failed to update profile', 'error');
          console.error(err);
        }
      });
  }
}
