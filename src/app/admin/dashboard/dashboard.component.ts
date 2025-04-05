import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public pieChartLabels: string[] = ['Prosthodontics and Crown & Bridge', 'Periodontology ', 'Conservative Dentistry & Endodontics', 'Oral & Maxillofacial Surgery ' , 'Orthodontics & Dentofacial Orthopedics', 'Paedodontics & Preventive Dentistry' , 'Oral Medicine & Radiology' , 'Oral Pathology & Microbiology' , 'Public Health Dentistry'];
  public pieChartData = [
    { data: [300, 500, 100 , 100 , 450 , 888 , 78 , 90 , 199 , 100], label: 'Today Appointments' }
  ];
  public pieChartType: any = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

  onRangeChange(event:any){
    const value = event.target.value;
    if (value === '1week') {
      this.pieChartData = [
        { data: [120, 340, 190, 60, 100, 80, 250, 75, 90, 110], label: 'Last Week Appointments' }
      ];
    } else if (value === '1month') {
      this.pieChartData = [
        { data: [400, 300, 500, 120, 180, 150, 360, 140, 220, 310], label: 'Last Month Appointments' }
      ];
    } else if (value === '1year') {
      this.pieChartData = [
        { data: [600, 700, 300, 450, 500, 650, 480, 520, 610, 400], label: 'Last Year Appointments' }
      ];
    } else if (value === 'all') {
      this.pieChartData = [
        { data: [900, 850, 700, 620, 580, 770, 690, 800, 810, 760], label: 'All Appointments' }
      ];
    } else {
      this.pieChartData = [
        { data: [20, 15, 25, 30, 10, 5, 18, 22, 14, 16], label: 'Today Appointments' }
      ];
    }
  }
}
