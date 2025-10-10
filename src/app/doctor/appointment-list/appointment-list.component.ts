import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  
  activeTab: string = 'today';

  previousAppointments:any = [];
upcomingAppointments:any = [];
completedAppointments:any = [];

// Date filters
previousDate: string = '';
upcomingDate: string = '';
   appointments:any = [
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
    private http:HttpClient,
    private router: Router
  ) { 
    this.getTreatments();
  }


  getTreatments(){
    let docId=JSON.parse(localStorage.getItem('doctor') || '{}').doctor_id
    this.http.get('http://localhost:3000/api/getAppointmentsOfDoctor/'+docId  ).subscribe((res:any)=>{
      console.warn(res);
      this.appointments=res.result
    })
  }
  setTab(tab: string) {
  this.activeTab = tab;

  // Filter your appointments based on tab
  if (tab === 'today') {
    // this.appointments = ... today filter
  } else if (tab === 'previous') {
    // this.appointments = ... previous filter
  } else if (tab === 'upcoming') {
    // this.appointments = ... upcoming filter
  } else if (tab === 'completed') {
    // this.appointments = ... completed filter
  }
}

  ngOnInit(): void {
  }

  startTreatment(item:any) {
    this.router.navigate(['/doctor/appointment-update'] , { queryParams: { appointmentId: item.appointment_id } });
    // Navigate to treatment page or perform action
  }

}
