import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allappointment',
  templateUrl: './allappointment.component.html',
  styleUrls: ['./allappointment.component.scss']
})
export class AllappointmentComponent implements OnInit {

  unassignedPatients: any[] = []; // full list from API
  filteredPatients: any[] = [];   // filtered list for display
  searchText: string = '';
  deptId: any
  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.deptId = localStorage.getItem('department_id')
    this.getUnassignedPatients()
  }
  activeTab: string = 'allocation';
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
    this.http.get('http://localhost:3000/getappointments').subscribe((data: any) => {
      this.upcomingAppointments = data.result
    })
  }

  getUnpaidAppointments() {
    const deptString = localStorage.getItem('department_id');
    this.http.get('http://localhost:3000/getScheduledAppointments/' + deptString).subscribe((data: any) => {
      console.warn(data)
      this.unpaidAppointments = data.result
    })
  }

  getInProrogressAppointments() {
    const deptString = localStorage.getItem('department_id');
    this.http.get('http://localhost:3000/getInProgressAppointments/' + deptString).subscribe((data: any) => {
      this.inProgressAppointments = data.result
    })
  }

  getcompletedAppointments() {
    const deptString = localStorage.getItem('department_id');
    this.http.get('http://localhost:3000/getcompletedAppointments/' + deptString).subscribe((data: any) => {
      this.completedAppointments = data.result
    })
  }

  complete(appt: any) {
    this.http.post('http://localhost:3000/completeAppointment', { appointment_id: appt.appointment_id, treatment_id: appt.treatment_id }).subscribe((data: any) => {
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

  getUnassignedPatients() {
    this.http.get('http://localhost:3000/api/getUnAssignedPatients/' + this.deptId).subscribe((res: any) => {
      this.unassignedPatients = res;
      this.filteredPatients = res;
    });
  }

  filterPatients() {
    if (!this.searchText) {
      this.filteredPatients = this.unassignedPatients;
      return;
    }

    const search = this.searchText.toLowerCase();
    this.filteredPatients = this.unassignedPatients.filter(p =>
      p.patient_name.toLowerCase().includes(search)
    );
  }

  confirm(appt: any) {
    this.http.post('http://localhost:3000/updateAppointment', { appointment_id: appt.appointment_id }).subscribe((data: any) => {
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

  assignDoctor(patient: any) {
    this.router.navigate(['omdr/assignDoctor', patient.dept_id , patient.treatment_id]);
  }

  ngOnInit(): void {
    this.getUnpaidAppointments()
    this.getInProrogressAppointments()
    this.getcompletedAppointments()
  }

}
