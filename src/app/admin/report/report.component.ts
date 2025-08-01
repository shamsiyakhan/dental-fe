import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

 reports = [
    {
      name: 'Monthly Financial Summary',
      type: 'financial',
      description: 'Complete financial overview for December 2024',
      date: '2024-12-28',
      by: 'Dr. Sarah Johnson',
      size: '2.3 MB',
      status: 'ready',
      downloads: 15
    },
    {
      name: 'Patient Demographics Report',
      type: 'patient',
      description: 'Age distribution and demographic analysis',
      date: '2024-12-27',
      by: 'Admin User',
      size: '1.8 MB',
      status: 'ready',
      downloads: 8
    },
    {
      name: 'Treatment Analytics',
      type: 'treatment',
      description: 'Most common treatments and success rates',
      date: '2024-12-26',
      by: 'Dr. Mike Chen',
      size: '3.1 MB',
      status: 'ready',
      downloads: 22
    },
    {
      name: 'Appointment Scheduling Analysis',
      type: 'appointment',
      description: 'Scheduling patterns and efficiency metrics',
      date: '2024-12-25',
      by: 'Office Manager',
      size: '1.2 MB',
      status: 'ready',
      downloads: 12
    },
    {
      name: 'Insurance Claims Report',
      type: 'financial',
      description: 'Insurance processing and claim statuses',
      date: '2024-12-24',
      by: 'Billing Manager',
      size: '4.5 MB',
      status: 'generating',
      downloads: 0
    },
    {
      name: 'Patient Satisfaction Survey',
      type: 'patient',
      description: 'Quarterly patient feedback compilation',
      date: '2024-12-23',
      by: 'Dr. Sarah Johnson',
      size: '0.9 MB',
      status: 'ready',
      downloads: 5
    }
  ];

  ngOnInit(): void {
    
  }
}

