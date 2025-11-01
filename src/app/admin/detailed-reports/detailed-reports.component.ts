import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-reports',
  templateUrl: './detailed-reports.component.html',
  styleUrls: ['./detailed-reports.component.scss']
})
export class DetailedReportsComponent implements OnInit {

  activeContent:any=""
  constructor() { }

  ngOnInit(): void {
  }

  selectContent(report:any){
    this.activeContent=report
  }

}
