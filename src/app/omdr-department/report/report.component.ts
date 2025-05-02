import { Component, OnInit } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  faUpload = faUpload;
  constructor() { }
  reports = [
    {
      name: 'Ethan Brooks',
      image: 'assets/ethan.jpg',
      fileName: 'Blood Test Report.pdf',
      fileUrl: '#',
      id: '898980'
    },
    {
      name: 'Hana Sato',
      image: 'assets/hana.jpg',
      fileName: 'X-Ray Report.pdf',
      fileUrl: '#',
      id: '894984'
    },
    {
      name: 'Hana Sato',
      image: 'assets/hana.jpg',
      fileName: 'X-Ray Report.pdf',
      fileUrl: '#',
      id: '894984'
    },
    {
      name: 'Hana Sato',
      image: 'assets/hana.jpg',
      fileName: 'X-Ray Report.pdf',
      fileUrl: '#',
      id: '894984'
    },
    {
      name: 'Hana Sato',
      image: 'assets/hana.jpg',
      fileName: 'X-Ray Report.pdf',
      fileUrl: '#',
      id: '894984'
    },
    {
      name: 'Hana Sato',
      image: 'assets/hana.jpg',
      fileName: 'X-Ray Report.pdf',
      fileUrl: '#',
      id: '894984'
    },
    // Add more dummy data as needed
  ];

 /*  pages = [1, 2, 3, 4]; */
  ngOnInit(): void {
  }

}
