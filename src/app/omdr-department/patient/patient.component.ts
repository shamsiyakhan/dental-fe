import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patients: any[] = [];
  filteredPatients: any[] = [];
  searchText: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/getPatients').subscribe((data: any) => {
      this.patients = data;
      this.filteredPatients = [...this.patients]; // keep original list
      console.warn('Patients:', this.patients);
    });
  }

  filterPatients() {
    const text = this.searchText.toLowerCase();
    this.filteredPatients = this.patients.filter(
      p =>
        p.fullname.toLowerCase().includes(text) ||
        p.userid.toLowerCase().includes(text) ||
        (p.phone && p.phone.toLowerCase().includes(text))
    );
  }

  redirectToPatientInfo(id: any) {
    this.router.navigate([`/omdr/patient-info/${id}`], { queryParams: { id: id } });
  }
}
