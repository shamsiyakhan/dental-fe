import { Component, OnInit } from '@angular/core';
import { ConsultationSaveService } from '../consultation-save.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-consultation',
  templateUrl: './info-consultation.component.html',
  styleUrls: ['./info-consultation.component.scss']
})
export class InfoConsultationComponent implements OnInit {

  appointment: any;
  appointmentForm!: FormGroup;
  loading = false;
  rescheduleDate!: string;
  minDate!: string;


  constructor(
    private obj: ConsultationSaveService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Grab previously stored consultation data (old behavior)
    this.appointment = this.obj.consultationData || {};
    console.warn("Loaded appointment:", this.appointment);

    // Build form with same controls (disabled where appropriate)
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
      patient_role: [{ value: '', disabled: true }],
      // Prescription header + meds FormArray
      prescription_date: [ this.isoDateToday() ],
      doctor_notes: [''],
      medications: this.fb.array([]) // dynamic meds
    });

    this.appointmentForm.patchValue(this.appointment);
    // Patch existing appointment values into the form (preserves autofill)
    if (this.appointment) {
      // ensure dates normalized for inputs if present
      if (this.appointment.prescriptions && Array.isArray(this.appointment.prescriptions) && this.appointment.prescriptions.length) {
        const pres = this.appointment.prescriptions[0];
        // map prescription_date to yyyy-mm-dd if present
        if (pres && pres.prescription_date) {
          // convert to yyyy-mm-dd
          this.appointment.prescription_date = this.normalizeDateForInput(pres.prescription_date);
        }
        // prefill doctor_notes if present
        if (pres && pres.doctor_notes) {
          this.appointment.doctor_notes = pres.doctor_notes;
        }
        // prefill medications if exist
        const meds = pres?.medications || [];
        // push meds into FormArray (do AFTER patchValue to override)
        meds.forEach((m: any) => {
          this.addMedication(m);
        });
      }
      // Important: patch main appointment values
      this.appointmentForm.patchValue(this.appointment);
      console.warn("Patched appointment:", this.appointmentForm.value);
    }
  }

  ngOnInit(): void {
     const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
   }

  // Helpers for FormArray
  get medications(): FormArray {
    return this.appointmentForm.get('medications') as FormArray;
  }

  createMedication(data?: any) {
    return this.fb.group({
      medication_name: [data?.medication_name || '', Validators.required],
      dosage: [data?.dosage || ''],
      quantity: [data?.quantity || ''],
      frequency: [data?.frequency || ''],
      duration: [data?.duration || ''],
      instructions: [data?.instructions || '']
    });
  }

  addMedication(data?: any) {
    this.medications.push(this.createMedication(data));
    // small timeout to ensure UI layout recalculates (helps prevent overflow)
    setTimeout(() => {
      // noop — placeholder if you want to focus new input later
    }, 0);
  }

  removeMedication(index: number) {
    this.medications.removeAt(index);
  }

  isoDateToday(): string {
    const d = new Date();
    const mm = (d.getMonth() + 1).toString().padStart(2, '0');
    const dd = d.getDate().toString().padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  normalizeDateForInput(dateStr: string): string {
    if (!dateStr) return this.isoDateToday();
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return this.isoDateToday();
    const mm = (d.getMonth() + 1).toString().padStart(2, '0');
    const dd = d.getDate().toString().padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  // Main submit: builds payload in shape API expects and posts
  markAsComplete(): void {
    // Validate medications required fields
    if (this.medications.length > 0) {
      for (let i = 0; i < this.medications.length; i++) {
        const mg = this.medications.at(i);
        if (mg.get('medication_name')?.invalid) {
          Swal.fire({ icon: 'warning', title: 'Fill medicine name', text: 'Please provide a medicine name or remove the row.' });
          return;
        }
      }
    }

    this.loading = true;

    // get raw values (including disabled controls)
    const raw = this.appointmentForm.getRawValue();

    // Build meds array exactly as API requires
    const medsPayload = (raw.medications || []).map((m: any) => ({
      medication_name: m.medication_name,
      dosage: m.dosage,
      quantity: m.quantity,
      frequency: m.frequency,
      duration: m.duration,
      instructions: m.instructions
    }));

    // Build payload matching your API
    const payload: any = {
      appointment_id: raw.appointment_id,
      treatment_id: raw.treatment_id,
      finding: raw.finding,
      history: raw.history,
      prescription_date: raw.prescription_date || this.isoDateToday(),
      doctor_notes: raw.doctor_notes || '',
      medications: medsPayload
    };

    console.log('Payload to send:', payload);

    this.http.post('http://localhost:3000/updateComplete', payload).subscribe({
      next: (data: any) => {
        this.loading = false;
        Swal.fire({
          icon: 'success',
          title: 'Completed',
          text: 'Appointment marked as complete successfully!'
        }).then(() => {
          this.router.navigate(['/doctor/dashboard']);
        });
      },
      error: (err) => {
        console.error('Error updating:', err);
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update appointment.'
        });
      }
    });
  }



    markAsPartialComplete(): void {
    // Validate medications required fields
    if (this.medications.length > 0) {
      for (let i = 0; i < this.medications.length; i++) {
        const mg = this.medications.at(i);
        if (mg.get('medication_name')?.invalid) {
          Swal.fire({ icon: 'warning', title: 'Fill medicine name', text: 'Please provide a medicine name or remove the row.' });
          return;
        }
      }
    }

    this.loading = true;

    // get raw values (including disabled controls)
    const raw = this.appointmentForm.getRawValue();

    // Build meds array exactly as API requires
    const medsPayload = (raw.medications || []).map((m: any) => ({
      medication_name: m.medication_name,
      dosage: m.dosage,
      quantity: m.quantity,
      frequency: m.frequency,
      duration: m.duration,
      instructions: m.instructions
    }));

    // Build payload matching your API
    const payload: any = {
      appointment_id: raw.appointment_id,
      treatment_id: raw.treatment_id,
      finding: raw.finding,
      history: raw.history,
      prescription_date: raw.prescription_date || this.isoDateToday(),
      doctor_notes: raw.doctor_notes || '',
      medications: medsPayload,
      next_appointment_date: this.rescheduleDate || null,
      doctor_id: this.appointment?.doctor_id || null
    };

    console.log('Payload to send:', payload);

    this.http.post('http://localhost:3000/updateInComplete', payload).subscribe({
      next: (data: any) => {
        this.loading = false;
        Swal.fire({
          icon: 'success',
          title: 'Completed',
          text: 'Appointment rescheduled and marked current one as marked!'
        }).then(() => {
          this.router.navigate(['/doctor/dashboard']);
        });
      },
      error: (err) => {
        console.error('Error updating:', err);
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update appointment.'
        });
      }
    });
  }
}
