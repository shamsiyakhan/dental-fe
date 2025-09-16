import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.scss']
})
export class AppointmentUpdateComponent implements OnInit {
 appointment: any = {
    appointment_id: "EWlcIpLPd7",
    treatment_name: "Management of oral precancerous conditions",
    total_charges: "650",
    issue_date: "2025-09-10T18:30:00.000Z",
    patientid: "eFJnNywunz",
    history: "",
    finding: "",
    prescription: ""
  };

  ngOnInit(): void {}

  markAsComplete() {
    console.log("Marking as complete:", this.appointment);
    // call API here -> update status to Completed
  }

  keepForNext() {
    console.log("Keeping for next appointment:", this.appointment);
    // call API here -> update status to Next Appointment
  }
}