import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-assign',
  templateUrl: './appointment-assign.component.html',
  styleUrls: ['./appointment-assign.component.scss']
})
export class AppointmentAssignComponent implements OnInit {

  constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
        private http: HttpClient,
          private dialogRef: MatDialogRef<AppointmentAssignComponent>,
  ){

  }
  ngOnInit() {
    console.warn(this.data)
  }
  selectedDate: string = '';
  selectedTime: string = '';
  formattedDateTime: string = '';

  onDateTimeChange() {
    if (this.selectedDate && this.selectedTime) {
      const combined = new Date(`${this.selectedDate}T${this.selectedTime}`);
      this.formattedDateTime = this.formatDateTime(combined);
      console.log('Formatted DateTime:', this.formattedDateTime);
    }
  }

  formatDateTime(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1); // Months are 0-based
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const min = pad(date.getMinutes());
    const ss = pad(date.getSeconds());
    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  }

  createAppointment(){
    const appointmentData = {
      treatment_id: this.data.doctor.treatment_id,
      dept_id: this.data.department.dept_id,
      appointment_date: this.formattedDateTime,
      status: "Scheduled",
      payment_status:"unpaid"
    }
    console.warn(appointmentData)
    this.http.post('http://localhost:3000/addAppointment', appointmentData).subscribe((data:any)=>{
      console.warn(data)
      
        Swal.fire({
                title: 'Success!',
                text: 'Appointment Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok',
              });
        this.dialogRef.close()
     
    })
  }
}