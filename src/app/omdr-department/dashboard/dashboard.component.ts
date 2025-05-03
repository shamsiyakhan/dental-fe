import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  todaysAppointments:any[]=[]
  appointments = [
    {
      image: 'assets/doc1.jpg',
      name: 'Aarav Mehta',
      type: 'Initial Oral Checkup',
      id: 'ID: 983749',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    {
      image: 'assets/doc2.jpg',
      name: 'Aarav Mehta',
      type: 'Initial Oral Checkup',
      id: 'ID: 983749',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    {
      image: 'assets/doc5.jpg',
      name: 'Aarav Mehta',
      type: 'Initial Oral Checkup',
      id: 'ID: 983749',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    {
      image: 'assets/doc1.jpg',
      name: 'Aarav Mehta',
      type: 'Initial Oral Checkup',
      id: 'ID: 983749',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    {
      image: 'assets/doc1.jpg',
      name: 'Aarav Mehta',
      type: 'Initial Oral Checkup',
      id: 'ID: 983749',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    // ...others
  ];
  
  tests = [
    {
      image: 'assets/doc2.jpg',
      name: 'Rohan Desai',
      id: 'ID: 983749',
      type: 'CBCT (Cone Beam CT Scan)',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    {
      image: 'assets/doc2.jpg',
      name: 'Rohan Desai',
      id: 'ID: 983749',
      type: 'CBCT (Cone Beam CT Scan)',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    {
      image: 'assets/doc2.jpg',
      name: 'Rohan Desai',
      id: 'ID: 983749',
      type: 'CBCT (Cone Beam CT Scan)',
      date: '8th Mar, 2025',
      time: '6:00 pm',
      status: 'Waiting'
    },
    // ...others
  ];
  
  reports = [
    {
      image: 'assets/doc3.jpg',
      name: 'Ethan Brooks',
      id: '898198',
      label: 'Blood Test Report.pdf',
      file: 'assets/reports/blood-test.pdf'
    },
    {
      image: 'assets/doc3.jpg',
      name: 'Ethan Brooks',
      id: '898198',
      label: 'Blood Test Report.pdf',
      file: 'assets/reports/blood-test.pdf'
    },
    
    // ...others
  ];
  
  ngOnInit(): void {
    this.getTodaysAppointments()
  }

  getTodaysAppointments(){
    const deptId = localStorage.getItem('department_id')
    this.http.get('http://localhost:3000/getTodayAppointment/'+deptId).subscribe((data:any)=>{
      console.warn(data)
      this.todaysAppointments=data.result
    })
  }

}
