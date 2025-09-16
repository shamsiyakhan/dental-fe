import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  

   appointments = [
    {
      appointment_id: "EWlcIpLPd7",
      treatment_id: "PBwvvHraP3",
      appointment_date: "2025-09-16T09:06:34.000Z",
      dept_id: "18MIA4AsbJ",
      status: "Assigned",
      doctor_id: "yfsjeIoLO1",
      prescription: null,
      treatment_name: "Management of oral precancerous conditions",
      issue_date: "2025-09-10T18:30:00.000Z",
      total_charges: "650",
      finding: "",
      history: "",
      patientid: "eFJnNywunz",
      doctorid: null,
      complaint_id: "mvtnpRjQwe",
      payment_status: "Paid"
    }
  ];
  constructor(

    private router: Router
  ) { 

  }

  ngOnInit(): void {
  }

  startTreatment() {
    this.router.navigate(['/doctor/appointment-update']);
    // Navigate to treatment page or perform action
  }

}
