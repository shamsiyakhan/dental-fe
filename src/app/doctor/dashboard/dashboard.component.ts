import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  inProgressAppointments:any[]=[]
  todaysAppointments:any[]=[]
  doctor:any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() 
  {
    

    const doctorString = localStorage.getItem('doctor')
    this.doctor=JSON.parse(doctorString || '{}');
    this.getInProrogressAppointments()
  }


  getInProrogressAppointments() {
   /*  const deptString1= localStorage.getItem('department');
    const deptString = JSON.parse(deptString1 || '{}');
    if(deptString){
    this.http.get('http://localhost:3000/getInProgressAppointments/'+deptString?.dept_id).subscribe((data:any)=>{
      this.inProgressAppointments=data.result
    })
  } */
  }


  getTodaysAppointments(){
   /*  const deptId = localStorage.getItem('department_id')
    this.http.get('http://localhost:3000/getTodayAppointment/'+deptId).subscribe((data:any)=>{
      console.warn(data)
      this.todaysAppointments=data.result
    }) */
  }

}
