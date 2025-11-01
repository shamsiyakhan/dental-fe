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

  departments: any[] = [];
  treatments: any[] = []; // For selected department
  complaintForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialogRef<AssignDepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // Initialize form
    this.complaintForm = this.fb.group({
      treatment_name: [{ value: '', disabled: true }, Validators.required],
      issue_date: ['', Validators.required],
      status: [{ value: '', disabled: true }, Validators.required],
      total_charge: [{ value: null, disabled: true }, Validators.required],
      finding: ['', Validators.required],
      history: ['', Validators.required],
      dept_id: ['', Validators.required],
      patient_id: [{ value: '', disabled: true }, Validators.required],
      complaint_id: [{ value: '', disabled: true }, Validators.required],
      payment_status: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.warn(this.data);
    console.warn("date received")
    console.warn(this.data.reporting_date);
    const d = new Date(this.data.reporting_date);
    const onlyDate = d.toLocaleDateString('en-CA'); // gives YYYY-MM-DD in local time (IST)
    console.warn("after extracting date");
    console.warn(onlyDate);


    // Patch initial values
    this.complaintForm.patchValue({
      treatment_name: this.data.issue_reported,
      issue_date: onlyDate,
      status: "In Process",
      dept_id: this.data.dept_id,
      patient_id: this.data.patientid,
      complaint_id: this.data.complaint_id,
      payment_status: "Paid"
    });

    this.getDepartments();
  }

  // Fetch departments from API
  getDepartments() {
    this.http.get('http://localhost:3000/api/getDepartments').subscribe((data: any) => {
      console.warn("department list")
      this.departments = data.result || data; // support both response formats
      console.warn(this.departments)
    });
  }

  // Handle department selection change
  onDepartmentChange(event: any) {
    const deptId = event.target.value;
    if (deptId) {
      this.http.get(`http://localhost:3000/api/getTreatments/${deptId}`).subscribe((res: any) => {
        this.treatments = res || [];
        this.complaintForm.get('treatment_name')?.enable();
      });
    }
  }

  // Handle treatment selection change (if using dropdown)
  onTreatmentChange(event: any) {
    const treatmentName = event.target.value;
    const selectedTreatment = this.treatments.find(t => t.treatment_name === treatmentName);
    if (selectedTreatment) {
      this.complaintForm.patchValue({
        total_charge: selectedTreatment.total_charges
      });
    }
  }

  // Form submission
  onSubmit() {
    // Prepare data by enabling disabled fields temporarily
    const formData = {
      ...this.complaintForm.getRawValue() // includes disabled fields
    };

    this.http.post('http://localhost:3000/startTreatment', formData).subscribe(
      (response) => {
        console.log('Complaint registered successfully', response);
        Swal.fire({
          title: 'Success!',
          text: 'Treatment Process Initialized',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error registering complaint', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to initialize treatment',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    );
  }
}
