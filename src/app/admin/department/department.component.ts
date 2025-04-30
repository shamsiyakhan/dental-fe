import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  departInfo(){
      this.route.navigate(['admin/departInfo/1'])
  }

}
