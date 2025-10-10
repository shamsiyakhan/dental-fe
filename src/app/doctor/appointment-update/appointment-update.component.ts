import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrls: ['./appointment-update.component.scss']
})
export class AppointmentUpdateComponent implements OnInit {

  appointmentId:any
  appointmentDetails:any
  activeTab: string = 'treatment';

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient
  ){

  }
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

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.appointmentId = params['appointmentId'];
      console.log("Received appointmentId:", this.appointmentId);
      this.getAppointmentDetails()
    });
  }

  markAsComplete() {
    console.log("Marking as complete:", this.appointment);
    // call API here -> update status to Completed
  }

  getAppointmentDetails(){
    this.http.get('http://localhost:3000/api/getSpecificAppointments/'+this.appointmentId).subscribe((res:any)=>{
      console.warn(res);
      this.appointmentDetails=res.result[0]
    })
  }

  keepForNext() {
    console.log("Keeping for next appointment:", this.appointment);
    // call API here -> update status to Next Appointment
  }
}