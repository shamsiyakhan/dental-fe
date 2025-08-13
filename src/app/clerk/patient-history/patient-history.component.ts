import { Component, OnInit } from '@angular/core';

interface Treatment {
  title: string;
  status: 'Completed' | 'Scheduled' | 'In Progress';
  date: string;
  tooth: string;
  dentist: string;
  cost: string;
  notes: string;
}


@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {
patient = {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    id: 'PT-00125',
    contact: '+91 9876543210',
    address: '123 Main Street, Mumbai'
  };

  treatments = [
    {
      tooth: 'Molar 24',
      name: 'Root Canal',
      cost: '₹ 5,000',
      date: '10 Aug 2025',
      status: 'Completed',
      description: 'Root canal completed successfully',
      doctor: 'Dr. Smith'
    },
    {
      tooth: 'Incisor 12',
      name: 'Filling',
      cost: '₹ 2,500',
      date: '5 Aug 2025',
      status: 'Scheduled',
      description: 'Filling scheduled for next visit',
      doctor: 'Dr. Adams'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
