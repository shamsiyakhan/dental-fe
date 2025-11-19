import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {

  loading = true;
  unpaidCount: number = 0;
  totalUnpaidAmount: number = 0;
  unpaidList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUnpaidTreatments();
  }

  loadUnpaidTreatments() {
    this.http.get('http://localhost:3000/api/unpaidTreatmentsList').subscribe({
      next: (res: any) => {
        if (res.success) {
          this.unpaidCount = res.unpaid_count || 0;
          this.totalUnpaidAmount = res.total_unpaid_amount || 0;
          this.unpaidList = res.unpaid_list || [];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching unpaid treatments:', err);
        this.loading = false;
      }
    });
  }
}
