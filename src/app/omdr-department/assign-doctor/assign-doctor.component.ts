import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-doctor',
  templateUrl: './assign-doctor.component.html',
  styleUrls: ['./assign-doctor.component.scss']
})
export class AssignDoctorComponent implements OnInit {

  treatmentId: any
  deptId: any
  searchTerm: string = '';
  doctors_list: any[] = []
  doctors = [
    { doctor_id: 'oxNDA1angm', fullname: 'Abul Fazl', email: 'shamsiyadoc@gmail.com' },
    { doctor_id: 'oxNDA1angm', fullname: 'Shamsiya Khan', email: 'shamsiyadoc@gmail.com' },

  ];

  appointments: any = {};
  constructor(
    private router: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.treatmentId = params['treatmentId'];
      this.deptId = params['deptid'];
      this.callFunctions();
    });

  }

  addAppointment(doc: any) {
    console.log('Add new appointment for:', doc.doctor_id);
    this.http.post('http://localhost:3000/api/allocateDoctor', { treatment_id: this.treatmentId, dept_id: this.deptId, doctor_id: doc.doctor_id }).subscribe((res: any) => {
      
      Swal.fire({
        icon: 'success',
        title: 'Doctor Assigned Successfully',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.history.back();
      });
    });
  }

  callFunctions() {
    this.getDeptDoctors();
    this.getDeptAppointments();
  }
  getFilteredDoctors() {
    if (!this.searchTerm) return this.doctors;
    const term = this.searchTerm.toLowerCase();
    return this.doctors.filter(doc =>
      doc.fullname.toLowerCase().includes(term) ||
      doc.email.toLowerCase().includes(term)
    );
  }

  getDeptDoctors() {
    this.http.get('http://localhost:3000/api/getDoctors/' + this.deptId).subscribe((res: any) => {
      console.log(res);
      this.doctors = res.result
      console.warn(this.doctors);
    })
  }

  getDeptAppointments() {
    this.http.get('http://localhost:3000/api/getAppointments/' + this.deptId).subscribe((res: any) => {
      console.log(res);
      res.forEach((appt: any) => {
        if (this.appointments[appt.doctor_id]) {
          this.appointments[appt.doctor_id].push(appt)
        } else {
          this.appointments[appt.doctor_id] = [appt]
        }
      })

      console.warn(this.appointments)
    })
  }


}
