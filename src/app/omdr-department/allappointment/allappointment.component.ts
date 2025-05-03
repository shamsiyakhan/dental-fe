import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allappointment',
  templateUrl: './allappointment.component.html',
  styleUrls: ['./allappointment.component.scss']
})
export class AllappointmentComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }
  activeTab: string = 'upcoming';
  upcomingAppointments: any[] = []
  inProgressAppointments: any[] = []
  unpaidAppointments: any[] = []
  completedAppointments: any[] = []
  appointments = [
    {
      image: 'assets/doc3.jpg',
      name: 'Zara Khan',
      purpose: 'Initial Oral Checkup',
      id: '980789',
      date: '8th Mar, 2025',
      time: '6:00 pm'
    },
    {
      image: 'assets/doc1.jpg',
      name: 'Aanya Sharma',
      purpose: 'Medical & Oral History Consultation',
      id: '890786',
      date: '8th Mar, 2025',
      time: '1:00 pm'
    },
    {
      image: 'assets/doc4.jpg',
      name: 'Aanya Sharma',
      purpose: 'Medical & Oral History Consultation',
      id: '890786',
      date: '8th Mar, 2025',
      time: '1:00 pm'
    },
    {
      image: 'assets/doc3.jpg',
      name: 'Zara Khan',
      purpose: 'Initial Oral Checkup',
      id: '980789',
      date: '8th Mar, 2025',
      time: '6:00 pm'
    },
  ]

    progress = [
      {
        image: 'assets/doc3.jpg',
        name: 'Zara Khan',
        purpose: 'Initial Oral Checkup',
        id: '980789',
        date: '8th Mar, 2025',
        time: '6:00 pm'
      },
      {
        image: 'assets/doc1.jpg',
        name: 'Aanya Sharma',
        purpose: 'Medical & Oral History Consultation',
        id: '890786',
        date: '8th Mar, 2025',
        time: '1:00 pm'
      },
      {
        image: 'assets/doc4.jpg',
        name: 'Aanya Sharma',
        purpose: 'Medical & Oral History Consultation',
        id: '890786',
        date: '8th Mar, 2025',
        time: '1:00 pm'
      },
      {
        image: 'assets/doc3.jpg',
        name: 'Zara Khan',
        purpose: 'Initial Oral Checkup',
        id: '980789',
        date: '8th Mar, 2025',
        time: '6:00 pm'
      },
    // ... other appointments
  ];


  getUpcomingAppointments() {
    this.http.get('http://localhost:3000/getappointments').subscribe((data:any)=>{
      this.upcomingAppointments=data.result
    })
  }

  getUnpaidAppointments() {
    const deptString = localStorage.getItem('department_id');
    this.http.get('http://localhost:3000/getScheduledAppointments/'+deptString).subscribe((data:any)=>{
      console.warn(data)
      this.unpaidAppointments=data.result
    })
  }

  getInProrogressAppointments() {
    const deptString = localStorage.getItem('department_id');
    this.http.get('http://localhost:3000/getInProgressAppointments/'+deptString).subscribe((data:any)=>{
      this.inProgressAppointments=data.result
    })
  }

  getcompletedAppointments() {
    const deptString = localStorage.getItem('department_id');
    this.http.get('http://localhost:3000/getcompletedAppointments/'+deptString).subscribe((data:any)=>{
      this.completedAppointments=data.result
    })
  }

  complete(appt:any){
    this.http.post('http://localhost:3000/completeAppointment',{appointment_id:appt.appointment_id , treatment_id:appt.treatment_id }).subscribe((data:any)=>{
      Swal.fire({
           title: 'Success!',
           text: 'Updated',
           icon: 'success',
           confirmButtonText: 'Ok',
         });

         this.getUnpaidAppointments()
         this.getInProrogressAppointments()
 })
  }

  confirm(appt:any){
    this.http.post('http://localhost:3000/updateAppointment',{appointment_id:appt.appointment_id}).subscribe((data:any)=>{
         Swal.fire({
              title: 'Success!',
              text: 'Updated',
              icon: 'success',
              confirmButtonText: 'Ok',
            });

            this.getUnpaidAppointments()
         this.getInProrogressAppointments()
    })
  }
  
  
  
  selectTab(tab: string) {
    this.activeTab = tab;
  }
  ngOnInit(): void {
    this.getUnpaidAppointments()
    this.getInProrogressAppointments()
    this.getcompletedAppointments()
  }

}
