import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
today = new Date();
  totalTests = 8;
  completed = 3;
  inProgress = 2;
  pending = 2;

  testData = [
    {
      id: 'T001', name: 'John Smith', pid: 'P12345', type: 'Panoramic X-ray', time: '08:30',
      status: 'completed', priority: 'medium', technician: 'Alice Johnson', doctor: 'Dr. Miller',
      result: 'Normal findings'
    },
    {
      id: 'T002', name: 'Emma Davis', pid: 'P12346', type: 'Bitewing X-ray', time: '09:15',
      status: 'completed', priority: 'low', technician: 'Bob Wilson', doctor: 'Dr. Smith',
      result: 'Small cavity detected'
    },
    {
      id: 'T003', name: 'Michael Brown', pid: 'P12347', type: 'CT Scan', time: '10:00',
      status: 'in-progress', priority: 'high', technician: 'Carol White', doctor: 'Dr. Johnson',
      result: 'Pending'
    },
    {
      id: 'T004', name: 'Sarah Wilson', pid: 'P12348', type: 'Periapical X-ray', time: '10:45',
      status: 'pending', priority: 'medium', technician: 'David Lee', doctor: 'Dr. Miller',
      result: 'Pending'
    },
    {
      id: 'T005', name: 'Robert Taylor', pid: 'P12349', type: 'CBCT Scan', time: '11:30',
      status: 'completed', priority: 'high', technician: 'Eva Garcia', doctor: 'Dr. Anderson',
      result: 'Impacted wisdom tooth'
    },
    {
      id: 'T006', name: 'Lisa Martin', pid: 'P12350', type: 'Intraoral Camera', time: '14:00',
      status: 'cancelled', priority: 'low', technician: 'Frank Adams', doctor: 'Dr. Smith',
      result: 'Pending'
    },
    {
      id: 'T007', name: 'James Anderson', pid: 'P12351', type: 'Digital X-ray', time: '14:30',
      status: 'in-progress', priority: 'medium', technician: 'Grace Kim', doctor: 'Dr. Johnson',
      result: 'Pending'
    },
    {
      id: 'T008', name: 'Maria Rodriguez', pid: 'P12352', type: 'Panoramic X-ray', time: '15:15',
      status: 'pending', priority: 'low', technician: 'Henry Chen', doctor: 'Dr. Miller',
      result: 'Pending'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
isMobile(): boolean {
  return window.innerWidth < 768;
}

}
