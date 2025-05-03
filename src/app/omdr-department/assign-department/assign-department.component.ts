import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-department',
  templateUrl: './assign-department.component.html',
  styleUrls: ['./assign-department.component.scss']
})
export class AssignDepartmentComponent implements OnInit {

  departments:any[]=[]
  complaintForm = this.fb.group({
    treatment_name: ['', Validators.required],
    issue_date: ['', Validators.required],
    status: ['', Validators.required],
    total_charge: [null, Validators.required],
    finding: ['', Validators.required],
    history: ['', Validators.required],
    dept_id: ['', Validators.required],
    patient_id: ['', Validators.required],
    complaint_id: ['', Validators.required],
    payment_status: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
     private http: HttpClient,
     private dialogRef: MatDialogRef<AssignDepartmentComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

  ngOnInit() {
    // Initialize the form with validators
    console.warn(this.data)
    const onlyDate = this.data.reporting_date.split('T')[0];
    this.complaintForm.patchValue({
      treatment_name: this.data.issue_reported,
      issue_date: onlyDate,
      status: "In Process",
      dept_id: this.data.dept_id,
      patient_id: this.data.patientid,
      complaint_id: this.data.complaint_id,
    })

    this.getDepartment()
   
  }

  // Method to handle form submission
  onSubmit(){


    // Prepare the data to send to the API
    const formData = this.complaintForm.value;

    // Make the API request to save the complaint
    this.http.post('http://localhost:3000/startTreatment', formData).subscribe(
      (response) => {
        console.log('Complaint registered successfully', response);
        Swal.fire({
                title: 'Success!',
                text: 'Treatment Process Initalized',
                icon: 'success',
                confirmButtonText: 'Ok',
              });
              this.dialogRef.close()
        // Handle success (e.g., show a success message)
      },
      (error) => {
        console.error('Error registering complaint', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

  getDepartment() {
    this.http.get('http://localhost:3000/getDepartments').subscribe((data: any) => {
      this.departments = data.result;
    })
  }
}