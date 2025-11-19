import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading = true;

  // Data from backend
  totalRevenue: number = 0;
  unpaidCount: number = 0;
  unpaidTotal: number = 0;
  todayCount: number = 0;
  todayAmount: number = 0;
  todaysList: any[] = [];

  private baseUrl = 'http://localhost:3000/api';
  constructor(
    private route: Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }
   getDashboardData(): Observable<any> {
    const totalRevenue$     = this.http.get(`${this.baseUrl}/totalRevenue`);
    const unpaidTreatments$ = this.http.get(`${this.baseUrl}/unpaidTreatments`);
    const todaysPayments$   = this.http.get(`${this.baseUrl}/todaysPayments`);

    // Call all 3 APIs together
    return forkJoin({
      totalRevenue: totalRevenue$,
      unpaidTreatments: unpaidTreatments$,
      todaysPayments: todaysPayments$
    });
  }

  loadDashboardData() {
    this.getDashboardData().subscribe({
      next: (res:any) => {
        this.loading = false;

        this.totalRevenue = res.totalRevenue?.total_success_amount || 0;
        this.unpaidCount  = res.unpaidTreatments?.unpaid_count || 0;
        this.unpaidTotal  = res.unpaidTreatments?.total_unpaid_amount || 0;
        this.todayCount   = res.todaysPayments?.total_count || 0;
        this.todayAmount  = res.todaysPayments?.total_amount || 0;
        this.todaysList   = res.todaysPayments?.payments_list || [];
      },
      error: (err:any) => {
        console.error('Error loading dashboard:', err);
        this.loading = false;
      }
    });
  }

<<<<<<< HEAD
  viewPatient(patient: any) {
    this.route.navigate([`/billing/${patient.userid}`]);
  }
=======
  register(){

    this.route.navigate(['/dashboard/'])
>>>>>>> 2de6d0b6e79cb1da64325162b3b07fa8631a23b8

  register() {
    this.route.navigate(['/billing/']);
  }

}
