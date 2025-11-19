import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  loading = true;
  patients: any[] = [];
  apiURL = 'http://localhost:3000/api/patientsUnpaidSummary';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients() {
    this.http.get(this.apiURL).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.patients = res.patients || [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading patients:', err);
        this.loading = false;
      }
    });
  }

  viewPatient(patientId: string) {
    this.router.navigate(['billing/patients', patientId]);
  }
}
