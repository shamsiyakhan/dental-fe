import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {

  userId: string = '';
  isLoading = true;
  patient: any = {
    fullname: '',
    address: '',
    gender: '',
    marital_status: '',
    dob: '',
    role: '',
    phone: '',
    emergency_contact: '',
    emergency_name: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let user= localStorage.getItem('patient') || '';
    console.warn(user)
    this.userId =JSON.parse(user || '{}').userid;


    if (this.userId) {
      this.getPatientDetails();
    } else {
      console.error('UserID not found in localStorage');
      this.isLoading = false;
    }
  }

  getPatientDetails() {
    this.http.get(`http://localhost:3000/patient/${this.userId}`).subscribe({
      next: (res: any) => {
        this.patient = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  updatePatient() {
    this.http.put(`http://localhost:3000/patient/${this.userId}`, this.patient).subscribe({
      next: (res: any) => {
        alert('✅ Patient updated successfully!');
      },
      error: (err) => {
        console.error(err);
        alert('❌ Error updating patient');
      }
    });
  }
}

