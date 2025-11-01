import { Component, OnInit } from '@angular/core';

interface Appointment {
  id: string;
  date: string; // ISO
  time: string;
  doctor: string;
  dept?: string;
  status?: 'Upcoming' | 'Cancelled' | 'Completed';
}

interface TreatmentPreview {
  id: string;
  name: string;
  date: string;
  status: string;
  charges?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // --- sample / placeholder data (replace with API data) ---
  appointments: Appointment[] = [];
  treatments: TreatmentPreview[] = [];
  testsCount = 0;
  totalCases = 0;

  // small loading flags for future integration
  loading = false;

  constructor() {}

  ngOnInit(): void {
    // Demo sample data — you will replace these calls with API responses
    this.loadDemoData();
    this.computeAggregates();
  }

  loadDemoData() {
    // Demo upcoming appointments (some in future, some past)
    this.appointments = [
      { id: 'A100', date: this.isoDaysFromNow(2), time: '10:30 AM', doctor: 'Dr. Sana Verma', dept: 'Dental', status: 'Upcoming' },
      { id: 'A101', date: this.isoDaysFromNow(7), time: '02:00 PM', doctor: 'Dr. R. Mehra', dept: 'Orthodontics', status: 'Upcoming' },
      // Uncomment to test "no upcoming" state:
      // (comment out above items)
    ];

    // Demo recent treatments
    this.treatments = [
      { id: 'T-101', name: 'Extraction of Tooth #14', date: this.isoDaysFromNow(-4), status: 'Completed', charges: 1500 },
      { id: 'T-099', name: 'Root Canal - Molar', date: this.isoDaysFromNow(-20), status: 'Completed', charges: 4200 },
      { id: 'T-110', name: 'Teeth Cleaning', date: this.isoDaysFromNow(-2), status: 'Assigned', charges: 800 }
    ];

    this.testsCount = 7;
    this.totalCases = 28;
  }

  computeAggregates() {
    // You can expand later to compute from API responses
    this.totalCases = this.totalCases || this.treatments.length + 10;
    this.testsCount = this.testsCount || 0;
  }

  // helper to format date for demo
  isoDaysFromNow(dayOffset: number) {
    const d = new Date();
    d.setDate(d.getDate() + dayOffset);
    return d.toISOString();
  }

  // returns upcoming appointments only (future dates)
  get upcomingAppointments(): Appointment[] {
    const now = new Date();
    return this.appointments
      .filter(a => new Date(a.date) >= new Date(now.getFullYear(), now.getMonth(), now.getDate()))
      .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  }

  // quick action placeholders (do not change)
  openAppointments() {
    // route to appointments page later
    console.log('Open appointments list');
  }

  openTreatments() {
    console.log('Open treatments list');
  }

  openTests() {
    console.log('Open tests list');
  }

  // small UI helper for pill colors
  pillClass(status: string) {
    const s = (status || '').toLowerCase();
    return s.includes('completed') ? 'pill-completed' : s.includes('assigned') ? 'pill-assigned' : 'pill-inprogress';
  }
}
