import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  

   appointments:any[] = [];
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

  ngOnInit(): void {
  }

  startTreatment() {
    this.router.navigate(['/doctor/appointment-update']);
    // Navigate to treatment page or perform action
  }

}
