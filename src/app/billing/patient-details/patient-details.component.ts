import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  loading = true;
  patientId: string = '';
  treatments: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.patientId = this.route.snapshot.paramMap.get('patientid') || '';
    if (this.patientId) {
      this.loadTreatments();
    }
  }

  loadTreatments() {
    this.http.get(`http://localhost:3000/api/patientTreatments/${this.patientId}`).subscribe({
      next: (res: any) => {
        this.treatments = res.treatments || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching patient treatments:', err);
        this.loading = false;
      }
    });
  }
}
