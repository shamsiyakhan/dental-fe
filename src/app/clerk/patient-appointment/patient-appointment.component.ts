import { Component, OnInit } from '@angular/core';

interface Patient {
  initials: string;
  name: string;
  id: string;
  age: number;
  phone: string;
  email: string;
  address: string;
  insurance: { provider: string; id: string };
  emergency: { name: string; phone: string };
  allergies: string[];
  conditions: string[];
}

interface Appointment {
  title: string;
  status: string;
  date: string;
  time: string;
  doctor: string;
  durationMin: number;
}


@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss']
})
export class PatientAppointmentComponent implements OnInit {
 patient: Patient = {
    initials: 'SJ',
    name: 'Sarah Johnson',
    id: 'PAT-2024-001',
    age: 40,
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@email.com',
    address: '123 Oak Street, Springfield, IL 62701',
    insurance: {
      provider: 'Delta Dental',
      id: 'DD123456789'
    },
    emergency: {
      name: 'John Johnson',
      phone: '(555) 987-6543'
    },
    allergies: ['Penicillin', 'Latex'],
    conditions: ['Hypertension']
  };

  appointments: Appointment[] = [
    {
      title: 'Crown Placement',
      status: 'Confirmed',
      date: '20/08/2024',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      durationMin: 90
    },
    {
      title: 'Follow-up',
      status: 'Pending',
      date: '15/09/2024',
      time: '2:00 PM',
      doctor: 'Dr. Adams',
      durationMin: 30
    }
  ];

  activeTab: string = 'appointments';
  search: string = '';
  statusFilter: string = 'All';

  get filteredAppointments(): Appointment[] {
    return this.appointments.filter(appt => {
      const matchesStatus = this.statusFilter === 'All' || appt.status === this.statusFilter;
      const matchesSearch = appt.title.toLowerCase().includes(this.search.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }

  schedule() {
    console.log('Schedule Appointment clicked');
  }

  newTreatment() {
    console.log('New Treatment clicked');
  }

  reschedule(appt: Appointment) {
    console.log('Reschedule appointment:', appt);
  }

  cancel(appt: Appointment) {
    console.log('Cancel appointment:', appt);
  }  constructor() { }

  ngOnInit(): void {
  }

}
