import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

type ApptStatus = 'Confirmed' | 'Pending' | 'Completed' | 'In Progress' | 'Scheduled';
type DocType = 'Image' | 'PDF' | 'Other';

interface Appointment {
  title: string;
  status: ApptStatus;
  date: string;
  time: string;
  doctor: string;
  durationMin: number;
}
interface Treatment {
  procedure: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  date: string;
  provider: string;
  notes: string;
}
interface DocFile {
  id: string;
  name: string;
  type: DocType;
  date: string;
  previewUrl: string;
}

@Component({
  selector: 'app-patient-document',
  templateUrl: './patient-document.component.html',
  styleUrls: ['./patient-document.component.scss'],
 
})
export class PatientDocumentComponent implements OnInit {
// patient summary (dummy)
  patient = {
    initials: 'SJ',
    name: 'Sarah Johnson',
    id: 'PAT-2024-001',
    age: 40,
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@email.com',
    address: '123 Oak Street, Springfield, IL 62701',
    insurance: { provider: 'Delta Dental', id: 'DD123456789' },
    emergency: { name: 'John Johnson', phone: '(555) 987-6543' },
    allergies: ['Penicillin', 'Latex'],
    conditions: ['Hypertension']
  };

  // tabs & filters
  activeTab: 'history' | 'appointments' | 'documents' = 'documents';
  search = '';
  statusFilter: 'All' | ApptStatus = 'All';

  // data
  treatments: Treatment[] = [
    { procedure: 'Root Canal Therapy', status: 'Completed', date: '12/06/2024', provider: 'Dr. Adams', notes: 'Mild sensitivity for 24h.' },
    { procedure: 'Crown Placement', status: 'In Progress', date: '20/08/2024', provider: 'Dr. Smith', notes: 'Temporary crown placed.' }
  ];
  appointments: Appointment[] = [
    { title: 'Crown Placement', status: 'Confirmed', date: '20/08/2024', time: '10:00 AM', doctor: 'Dr. Smith', durationMin: 90 },
    { title: 'Follow-up', status: 'Pending', date: '15/09/2024', time: '2:00 PM', doctor: 'Dr. Smith', durationMin: 30 }
  ];
  docs: DocFile[] = []; // start empty to show the empty state like screenshot

  // computed
  get filteredTreatments(): Treatment[] {
    const q = this.search.toLowerCase().trim();
    return this.treatments.filter(t =>
      !q ||
      t.procedure.toLowerCase().includes(q) ||
      t.provider.toLowerCase().includes(q) ||
      t.notes.toLowerCase().includes(q)
    );
  }
  get filteredAppointments(): Appointment[] {
    const q = this.search.toLowerCase().trim();
    return this.appointments.filter(a => {
      const byStatus = this.statusFilter === 'All' || a.status === this.statusFilter;
      const byQuery = !q || [a.title, a.doctor, a.date, a.time].some(v => v.toLowerCase().includes(q));
      return byStatus && byQuery;
    });
  }

  // actions
  schedule() { /* hook with router/api later */ }
  newTreatment() { /* open dialog later */ }
  reschedule(appt: Appointment) { console.log('Reschedule', appt); }
  cancel(appt: Appointment) { console.log('Cancel', appt); }

  onFileSelect(e: Event) {
    const input = e.target as HTMLInputElement;
    if (!input.files) return;
    Array.from(input.files).forEach(file => {
      const name = file.name.toLowerCase();
      const type: DocType =
        name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg') || name.endsWith('.webp')
          ? 'Image' : name.endsWith('.pdf') ? 'PDF' : 'Other';
      this.docs.push({
        id: crypto.randomUUID(),
        name: file.name,
        type,
        date: new Date().toLocaleDateString(),
        previewUrl: URL.createObjectURL(file)
      });
    });
    (e.target as HTMLInputElement).value = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
