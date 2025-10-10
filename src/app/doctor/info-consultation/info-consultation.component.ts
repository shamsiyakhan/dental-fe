import { Component, OnInit } from '@angular/core';
import { ConsultationSaveService } from '../consultation-save.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-consultation',
  templateUrl: './info-consultation.component.html',
  styleUrls: ['./info-consultation.component.scss']
})
export class InfoConsultationComponent implements OnInit {

  appointment:any
  appointmentForm!:FormGroup
  constructor(
    private obj:ConsultationSaveService,
    private fb:FormBuilder,
    private http:HttpClient,
    private router:Router
  ) { 
    this.appointment=this.obj.consultationData


    this.appointmentForm = this.fb.group({
      appointment_id: [{ value: '', disabled: true }],
      treatment_id: [{ value: '', disabled: true }],
      appointment_date: [{ value: '', disabled: true }],
      dept_id: [{ value: '', disabled: true }],
      appointment_status: [{ value: '', disabled: true }],
      treatment_name: [{ value: '', disabled: true }],
      issue_date: [{ value: '', disabled: true }],
      treatment_status: [{ value: '', disabled: true }],
      total_charges: [{ value: '', disabled: true }],
      finding: [''], // editable
      history: [''], // editable
      dept_name: [{ value: '', disabled: true }],
      hodname: [{ value: '', disabled: true }],
      dept_username: [{ value: '', disabled: true }],
      patient_id: [{ value: '', disabled: true }],
      patient_name: [{ value: '', disabled: true }],
      patient_email: [{ value: '', disabled: true }],
      patient_role: [{ value: '', disabled: true }]
    });
  
    // Patch values
    this.appointmentForm.patchValue(this.appointment);
  }

  ngOnInit(): void {
  }

markAsComplete(): void {
  // Get all form values including disabled fields
  const updatedFormData = this.appointmentForm.getRawValue();

  // You can also select only specific fields if needed
  const payload = {
    ...updatedFormData,
    finding: this.appointmentForm.get('finding')?.value,
    history: this.appointmentForm.get('history')?.value
  };

  console.log('Payload to send:', payload);

  this.http.post('http://localhost:3000/updateComplete', payload).subscribe({
    next: (data: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Completed',
        text: 'Appointment marked as complete successfully!'
      });
      this.router.navigate(['/doctor/dashboard']);
    },
    error: (err) => {
      console.error('Error updating:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update appointment.'
      });
    }
  });
}


}
