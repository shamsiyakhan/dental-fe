import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Appointment {
  appointment_id: string;
  treatment_id: string;
  appointment_date: string;
  dept_id?: string;
  status?: string;
  doctor_id?: string;
  finding?: string;
  treatment_name?: string;
  issue_date?: string;
  total_charges?: string;
  history?: string;
  patientid?: string;
  fullname?: string;
  email?: string;
  phone?: string;
  doctor_name?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doctor: any = null;
  docId: string | null = null;
   totalPatients: number = 0;

  todaysAppointments: Appointment[] = [];
  completedAppointments: Appointment[] = [];

  loadingToday = false;
  loadingCompleted = false;
  errorMsg = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDoctorFromLocalStorage();
    if (this.docId) {
      this.fetchTodaysAppointments();
      this.fetchCompletedAppointments();
    } else {
      this.errorMsg = 'Doctor not found in localStorage.';
    }
  }

  get pendingAppointmentsCount(): number {
  return this.todaysAppointments.filter(
    a => (a.status || '').toLowerCase() !== 'completed'
  ).length;
}

  loadDoctorFromLocalStorage() {
    // Accept either a JSON stored under 'doctor' or a plain doctor_id under 'doctor_id' or 'userid'
    try {
      const raw = localStorage.getItem('doctor') || localStorage.getItem('user') || localStorage.getItem('doctorInfo');
      if (raw) {
        try {
          this.doctor = JSON.parse(raw);
        } catch {
          // if value is plain id string
          this.doctor = { doctor_id: raw };
        }
      } else {
        // fallback: maybe only id under 'doctor_id'
        const id = localStorage.getItem('doctor_id') || localStorage.getItem('userid');
        if (id) {
          this.doctor = { doctor_id: id };
        }
      }

      this.docId = this.doctor?.doctor_id || this.doctor?.doctorId || this.doctor?.doctorid || null;
    } catch (err) {
      console.error('Error reading doctor from localStorage', err);
      this.doctor = null;
      this.docId = null;
    }
  }

  fetchTodaysAppointments() {
    if (!this.docId) return;
    this.loadingToday = true;
    this.http.get<any>(`http://localhost:3000/api/getAppointmentsOfDoctor/${this.docId}`)
      .subscribe({
        next: (res) => {
          // assume structure same as completed: result or array
          // try to normalize
          const data = res?.result ?? res?.appointments ?? res?.data ?? res;
          this.todaysAppointments = Array.isArray(data) ? data : (data ? [data] : []);
          this.loadingToday = false;
        },
        error: (err) => {
          console.error('Error fetching today appointments', err);
          this.errorMsg = 'Failed to load today appointments.';
          this.loadingToday = false;
        }
      });
  }

  fetchCompletedAppointments() {
    if (!this.docId) return;
    this.loadingCompleted = true;
    this.http.get<any>(`http://localhost:3000/api/getCompletedAppointments/${this.docId}`)
      .subscribe({
        next: (res) => {
          const data = res?.result ?? res?.completed ?? res?.data ?? res;
          this.completedAppointments = Array.isArray(data) ? data : (data ? [data] : []);
          this.loadingCompleted = false;
        },
        error: (err) => {
          console.error('Error fetching completed appointments', err);
          this.errorMsg = 'Failed to load completed appointments.';
          this.loadingCompleted = false;
        }
      });
  }

  // UI helpers
  appointmentTime(iso: string) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  appointmentDate(iso: string) {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' });
  }

  viewAppointment(item: Appointment) {
    // Navigate to appointment detail/consultation page.
    // Keep this conservative: if you have a route for details, replace path accordingly.
    // We'll try to navigate to /doctor/consultation/:appointment_id
    this.router.navigate([`/doctor/consultation/${item.appointment_id}`]);
  }

  consultNow(item: Appointment) {
    // Hook for starting consultation (e.g., open modal or route)
    this.router.navigate([`/doctor/consultation/${item.appointment_id}`]);
  }
}
